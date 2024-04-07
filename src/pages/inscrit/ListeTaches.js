import React, { useEffect, useState } from "react";
import Tache from '../../components/tache/Tache';
import axios from "axios";
import { dataImage, CAP_EVENTS } from '../../_helpers/data.env'
import { useNavigate, Link } from "react-router-dom";
import { gestionConnexion } from '../../_helpers/gestion.connexion'
import ModaleConfirmation from '../../components/ModaleConfirmation'
import '../../components/tache/custom-add-icon.css'


export default function ListeTaches() {

  var navigate = useNavigate()
  const [listeTaches, setListeTaches] = useState([])
  const [idUtilisateur, setidUtilisateur] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [dataIcon, setDataIcon] = useState(dataImage)
  const [isDisabled, setDisabled] = useState('')
  const [isActive, setActive] = useState(false)
  const [isModaleConfirmationOpen, setModaleConfirmationOpen] = useState(false)
  const [infoConfirmation, setinfoConfirmation] = useState([`Vous avez atteint le nombre maximum d'évènements déjà actifs pour un compte standard : ${CAP_EVENTS}.`,
  `Rendez-vous sur la page Abonnement pour passer sur un compte Premium.`])

  /* Récupération du jeton de connexion */
  useEffect(() => {
    setidUtilisateur(sessionStorage.getItem('jeton'))
  }, [])

  /* Hook pour charger la liste des tâches et pour contrôle de l'atteinte du capping  */
  useEffect(() => {
    if (idUtilisateur.length !== 0) {
      getAllUserEvents()
      fetchCapReachedStatus();
    }
  }, [idUtilisateur])

  const fetchCapReachedStatus = async () => {
    try {
      const isCapReached = await gestionConnexion.checkCapIsReached(idUtilisateur);
      setDisabled(isCapReached);
    } catch (error) {
      console.error("Erreur useEffect:", error);
    }
  };

  const getAllUserEvents = async () => {
    console.log('getAllUserEvents')
    try {
      const response = await axios.get(`http://localhost:8081/getAllUserEvents/${idUtilisateur}`)
      if (response.status === 200) {
        setListeTaches(response.data.resultat)
      }
    } catch (error) {
      console.log("Erreur lors de la récupération des évènements du client ", error)
    }
  }

  const handleClickEvent = (idEvenement) => {
    navigate('../../estConnecte/modifierTache/' + idEvenement)
  }

  const handleNewTask = () => {
    setActive(!isActive)
    navigate('../../estConnecte/creationTache')
  }

  const onCloseConfirmation = () => {
    setModaleConfirmationOpen(false)
  }

  return (
    <>
      <div className={`circle ${isActive ? 'turquoise' : 'blanc'} sticky`} onClick={isDisabled ? ()=>setModaleConfirmationOpen(true) : handleNewTask} disabled={isDisabled}>
        <div className="cross">
          <div className={`line ${isActive ? 'blanc' : 'turquoise'}`}></div>
          <div className={`line ${isActive ? 'blanc' : 'turquoise'}`}></div>
        </div>
      </div>
      <div className="container bg-light d-flex justify-content-center">

        <div className="d-flex flex-wrap justify-content-bewteen">
          {listeTaches.length > 0 ? (listeTaches.map((element, index) => {
            return <Tache key={index} nomHabitude={element.nomEvenement} frequence={element.frequence}
              dateDebut={element.dateDebut} typeEvenement={element.nomTypeEvenement} idTypeEvenement={element.idTypeEvenement}
              image={dataIcon[element.idIcone]} method={() => handleClickEvent(element.idEvenement)} />
          })) : (<div className="mt-2"> <p>Vous n'avez aucun évènement.</p>
            <p>Démarrer sans attendre et créez en dès à présent</p>
          </div>)
          }
        </div>
      </div>
      <ModaleConfirmation open={isModaleConfirmationOpen} method={onCloseConfirmation}
        lignes={infoConfirmation} titre={"La limite d'évènements actifs a été atteinte"} />
      <div className="d-flex flex-wrap">
        <div className="container bg-light d-flex justify-content-between mt-5">
        </div>
      </div>
    </>
  )
}