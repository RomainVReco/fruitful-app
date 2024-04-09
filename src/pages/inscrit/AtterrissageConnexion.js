import React, { useEffect, useState } from "react";
import Tache from '../../components/tache/Tache';
import axios from "axios";
import { dataImage } from '../../_helpers/data.env'
import { useNavigate } from "react-router-dom";
import { ReactComponent as AjoutTache } from '../../assets/tache/add-icon.svg'
import { gestionConnexion } from '../../_helpers/gestion.connexion'
import '../../components/tache/custom-add-icon.css'
import BoutonSuivant from "../../components/BoutonSuivant";

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('Bouton cliqué')
}

export default function AtterrissageConnexion() {

  var navigate = useNavigate()
  const [listeTaches, setListeTaches] = useState([])
  const [idUtilisateur, setidUtilisateur] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [dataIcon, setDataIcon] = useState(dataImage)
  const [isDisabled, setDisabled] = useState('')
  const [isActive, setActive] = useState(false)

  /* Récupération du jeton de connexion */
  useEffect(() => {
    setidUtilisateur(sessionStorage.getItem('jeton'))
  }, [])

  return (
    <>
      {/* <div className="fond-inscription">
      <div className="row ">
        <div className="col"></div>
        <div className="col corps-inscription">
          <div>
                      <label for="comment" className="centre"> */}
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center mt-4">
          <div className="d-flex flex-column align-items-center">
            <h2 className="centre mb-4"></h2>
            <h2 className="mt-4">Connexion réussie !</h2>
            <p className="d-flex justify-content-center mt-4 max-width-absolute">Souhaitez-vous être accompagné par un assistant numérique dans le processus de création de tâches / d'habitudes ou aller directement sur la page listant les tâches et habitudes actuelles, vous permettant d'en ajouter manuellement ? </p>


            <div class="row container-fluid m-auto">

              <div class="col mb-4">
                <BoutonSuivant page="9" texte="Liste" />
              </div>

              <div class="col mb-4">
                <BoutonSuivant page="4" texte="Assistant" />
              </div>


            </div>
          </div>
          <div class="col"></div>
        </div >
      </div >
    </>
  );
} 