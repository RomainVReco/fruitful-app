import React, { useEffect } from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { gestionConnexion } from "../../_helpers/gestion.connexion";


export default function Renseignement5() {
  const donneesRenseignees = {
    mot1: "me sentir mieux",
    mot2: "mieux gérer ma vie",
    mot3: "me détoxifier",
    som1: "moins de 6 heures",
    som2: "entre 6 et 8 heures",
    som3: "plus de 8 heures",
    spo1: "entre 0 et 2 fois",
    spo2: "entre 3 et 5 fois",
    spo3: "plus de 6 fois",
    med1: "entre 0 et 2 fois",
    med2: "entre 3 et 5 fois",
    med3: "plus de 6 fois"
  }
  var tacheAuto = {
    nom: '',
    dateDebut: '',
    frequence: '',
    typeEvenement: '',
    idUtilisateur: sessionStorage.getItem("jeton"),
    logo: '',
  }

  var [messageEnregistrement, setMessageEnregistrement] = useState("Découvrez les listes des habitudes :");
  var habitudesAuto = [];

  //************************************************************************************************************** */
  const enregistrementHabitude = async (tacheAuto) => {
    try {
      const response = await axios.post('http://localhost:8081/createNewEvent', tacheAuto);
      console.log("response : ", response.data.success);
    } catch (error) {
      console.error('Error:', error);
    }
    return tacheAuto;
  }
  //************************************************************************************************************** */
  function recupererStorage(domaine) {
    try {
      let domaine2 = sessionStorage.getItem(domaine);

      switch (domaine2) {
        case 'som1':
        case 'som3': habitudesAuto.push("Dormir 8 heures par nuit");
          habitudesAuto.push("1"); // intervalle de jours entre chaque occurrence de l'evenement
          habitudesAuto.push("0"); // type d'événement
          habitudesAuto.push("0"); // n° de logo de l'événement
          break;
        case 'spo1':
        case 'spo2': habitudesAuto.push("Plus de 6 séances de sport par mois");
          habitudesAuto.push("5"); // intervalle de jours entre chaque occurrence de l'evenement
          habitudesAuto.push("0"); // type d'événement
          habitudesAuto.push("0"); // n° de logo de l'événement
          break;
        case 'med1':
        case 'med2': habitudesAuto.push("Méditer plus de 6 fois par mois");
          habitudesAuto.push("5"); // intervalle de jours entre chaque occurrence de l'evenement
          habitudesAuto.push("0"); // type d'événement
          habitudesAuto.push("0"); // n° de logo de l'événement
          break;
      }
      console.log("motivation :", domaine2);
      console.log("habitudes auto :", habitudesAuto);
      return donneesRenseignees[domaine2];
    }
    catch (e) {
      console.log(e);
    }
  }
  //************************************************************************************************************** */

  function ecrireTachesAuto(event) {
    event.preventDefault();

    if (!!sessionStorage.getItem("enregistrementHabitudesAuto") && sessionStorage.getItem("enregistrementHabitudesAuto") == "true") return;

    while (habitudesAuto.length > 1) {
      tacheAuto.nom = habitudesAuto[0];
      tacheAuto.dateDebut = format(new Date(), 'dd/MM/yyyy');
      tacheAuto.frequence = habitudesAuto[1];
      tacheAuto.typeEvenement = habitudesAuto[2];
      tacheAuto.logo = habitudesAuto[3];
      console.log("habitudeAuto : ", habitudesAuto, " tache Auto auto:", tacheAuto);
      enregistrementHabitude(tacheAuto);
      if (habitudesAuto.length > 4) {
        habitudesAuto = habitudesAuto.slice(4);
      }
      else {
        habitudesAuto = habitudesAuto.slice(0, 0);
        console.log("slice :", habitudesAuto);
        break;
      };
    }
    sessionStorage.setItem("enregistrementHabitudesAuto", true);
    setMessageEnregistrement("Enregistrement des nouvelles habitudes effectué avec succès ! Cliquez sur le bouton ci-dessous pour les découvrir et éventuellement les modifier :");
    return;
  }
  //************************************************************************************************************** */

  function afficherNouvellesTaches(habitudesAuto) {

    if (habitudesAuto.length == 0) {
      const messagePasDHabitudeAProposer = (<p>Nous n'avons pas d'habitude à vous proposer.</p>);
      return messagePasDHabitudeAProposer;
    } else {
      const messageHabitudeAProposer = (<p>Nous vous proposons les habitudes suivantes :</p>);
      const intitulesHabitudesAuto = habitudesAuto.filter((_, index) => index % 4 === 0);
      return (
        <><ul>{messageHabitudeAProposer}
          {intitulesHabitudesAuto.map((line, index) => (
            <li key={index}>{line}</li>
          ))}</ul>
        </>)
    }
  }
  //************************************************************************************************************** */
  return (
    <>
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-justify max-width-absolute-550">
            <h2 className="centre">Résultats</h2>
          <div className="small">
            <p>Nous vous remercions de votre participation !</p>
            <p>Nous avons établi les habitudes suivantes en fonction du profil que vous venez de renseigner :</p>
            <ul><li>Ma principale motivation est de {recupererStorage("motivation")}.</li>
              <li>Je dors {recupererStorage("sommeil")}.</li>
              <li>Je fais du sport {recupererStorage("sport")} par mois.</li>
              <li>Je médite {recupererStorage("meditation")} par mois.</li>
            </ul>
            {afficherNouvellesTaches(habitudesAuto)}
            <p> Souhaitez-vous enregistrer ces habitudes qui formeront votre routine de vie ?</p>

            <div class="col centre">
              <button
                className="btn boutonValiderSuivant mb-4"
                onClick={ecrireTachesAuto}
              >Enregistrer mes nouvelles habitudes</button>
            </div>
            <div>
   
              {messageEnregistrement && <p>{messageEnregistrement}</p>}

              <div class="col">
                <BoutonSuivant page="9" texte="Liste des habitudes" />
              </div>
              <div className="mb-4"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
