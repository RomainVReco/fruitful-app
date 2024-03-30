import React, { useEffect, useState } from "react";
import Tache from '../../components/Tache';
import axios from "axios";
import { dataImage } from '../../_helpers/data.env'
import { useNavigate } from "react-router-dom";
import { ReactComponent as AjoutTache} from '../../assets/add-icon.svg'

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Bouton cliqué')
}

export default function ListeTaches() {

  var navigate = useNavigate()
  const [listeTaches, setListeTaches] = useState([])
  const [idClient, setIdClient] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [dataIcon, setDataIcon] = useState(dataImage)

  /* Récupération du jeton de connexion */
  useEffect(() => {
    if (sessionStorage.getItem('jeton') == null) {
      setIdClient(7)
    } else {
      setIdClient(sessionStorage.getItem('jeton'))
    }
  }, [])

  /* Requête pour récupérer la liste des tâches*/
  useEffect(() => {
    if (idClient.length !== 0) {
      getAllUserEvents()
    }
  }, [idClient])

  const getAllUserEvents = async () => {
    console.log('getAllUserEvents')
    try {
      const response = await axios.get(`http://localhost:8081/getAllUserEvents/${idClient}`)
      console.log('getAllUserEvents : ', response.status)
      console.log('getAllUserEvents : ', response.data.resultat)
      if (response.status === 200) {
        setListeTaches(response.data.resultat)
      }
    } catch (error) {
      console.log("Erreur lors de la récupération des évènements du client ", error)
      setErrorMessage("Aucune donnée trouvée")
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
    <div className="container">
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {listeTaches.map((element, index) => {
        return <div key={index}><Tache nomHabitude={element.nomEvenement} frequence={element.frequence} 
        dateDebut={element.dateDebut} typeEvenement={element.nomTypeEvenement} idTypeEvenement={element.idTypeEvenement}
        image={dataIcon[element.idIcone]}method={() => handleClickEvent(element.idEvenement)}/>
        </div>
      })}

      <div className="d-flex justify-content-start" onClick={handleNewTask}><AjoutTache fill="#FFF"/></div>
    </div>
  )
}