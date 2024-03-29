import React, { useEffect, useState } from "react";
import Tache from '../../components/Tache';
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Bouton cliqué')
}

export default function ListeTaches() {

  const [listeTaches, setListeTaches] = useState('')
  const [idClient, setIdClient] = useState('')

  /* Récupération du jeton de connexion */
  useEffect(() => {
    if (sessionStorage.getItem('jeton') == null) {
      setIdClient(7)
    } else {
      setIdClient(sessionStorage.getItem('jeton'))
    }
  }, [])

  /* Requête pour récupérer la liste des tâches*/
  useEffect (() => {
    if (idClient.length !== 0) {
      getAllUserEvents()
    }
  }, [idClient])

  const getAllUserEvents = async () => {
    console.log('getAllUserEvents')
    try {
      const response = await axios.get(`http://localhost:8081/getAllUserEvents/${idClient}`)
      console.log('getAllUserEvents : ', response.status)
      console.log('getAllUserEvents : ', response.data)

    } catch (error) {
      console.log("Erreur lors de la récupération des évènements du client ", error)
    }

  }





  return (
    <div className="">
      <Tache nomHabitude="Lire un livre" quota='20' quantiteQuota='pages' heure='10h30' />
      <Tache nomHabitude="Courir" quota='5' quantiteQuota='km' heure='19h30' />
      <Tache nomHabitude="Dire un mot doux à ma femme" quota='' quantiteQuota='' heure='18h50' />
    </div>
  )
}