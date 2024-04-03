import React, { useEffect, useState } from "react";
import Tache from '../../components/Tache';
import axios from "axios";
import { dataImage } from '../../_helpers/data.env'
import { useNavigate } from "react-router-dom";
import { ReactComponent as AjoutTache} from '../../assets/tache/add-icon.svg'
import { gestionConnexion } from '../../_helpers/gestion.connexion'

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Bouton cliqué')
}

export default function ListeTaches() {

  var navigate = useNavigate()
  const [listeTaches, setListeTaches] = useState([])
  const [idUtilisateur, setidUtilisateur] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [dataIcon, setDataIcon] = useState(dataImage)
  const [isDisabled, setDisabled] = useState('')

  /* Récupération du jeton de connexion */
  useEffect(() => {
    if (sessionStorage.getItem('jeton') == null) {
      setidUtilisateur(7)
    } else {
      setidUtilisateur(sessionStorage.getItem('jeton'))
    }

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
      console.log('getAllUserEvents : ', response.status)
      console.log('getAllUserEvents : ', response.data.resultat)
      if (response.status === 200) {
        setListeTaches(response.data.resultat)
      }
    } catch (error) {
      console.log("Erreur lors de la récupération des évènements du client ", error)
    }
  }

  const handleClickEvent = (idEvenement) => {
    console.log("Clic tache : ", idEvenement)
    navigate('../../estConnecte/modifierTache/'+idEvenement)
  }

  const handleNewTask = () => {
    console.log("Clic handleNewTask")
    navigate('../../estConnecte/creationTache')
  }

  return (
    <div className="container bg-light">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div className="d-flex flex-wrap">
      { listeTaches.length > 0 ? (listeTaches.map((element, index) => {
          return <Tache key={index} nomHabitude={element.nomEvenement} frequence={element.frequence} 
          dateDebut={element.dateDebut} typeEvenement={element.nomTypeEvenement} idTypeEvenement={element.idTypeEvenement}
          image={dataIcon[element.idIcone]}method={() => handleClickEvent(element.idEvenement)}/>
        })) : (<div> <p>Vous n'avez aucun évènement.</p>
              <p>Démarrer sans attendre et créez en dès à présent</p>
              </div>)
      }
      </div> 
        

      <div className="d-flex justify-content-start" onClick={handleNewTask}><AjoutTache fill="#FFF"/></div>
      <button href="" className='btn boutonValiderProfil' disabled={isDisabled}>Valider</button>
    </div>
  )
}