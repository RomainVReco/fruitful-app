import React from "react";
import BoutonSuivant from "../../components/BoutonSuivant";
import BoutonPrecedent from "../../components/BoutonPrecedent";
import EntreeObjectif from "../../components/EntreeObjectif";
import { useState } from "react";
import axios from "axios";

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

  var habitudesAuto = new Array(  );

  function recupererStorage(domaine) {
    try {
      let domaine2 = sessionStorage.getItem(domaine);

      switch (domaine2) {
        case "som1" || "som3": habitudesAuto.push("Dormir 8 heures par nuit");
          break;
        case "spo1" || "spo2": habitudesAuto.push("Plus de 6 séances de sport par mois");
          break;
        case "med1" || "med2": habitudesAuto.push("Méditer plus de 6 fois par mois");
          break;
      }

      console.log("motivation :", domaine2);
      console.log(habitudesAuto);
      return donneesRenseignees[domaine2];
    }
    catch (e) {
      console.log(e);
    }
  }

  function afficherNouvellesTaches(habitudesAuto) {
    return habitudesAuto.map((line, index) => (
      <p key={index}>{line}</p>
    ));
  }
  //   for (let i=0; i<3; i++){
  // enregistrementHabitude()
  //   }
  //   const enregistrementHabitude = async (inscrit) => {
  //     console.log("inscrit avant try :", inscrit);
  //     try {
  //       const response = await axios.put('http://localhost:8081/enregistrementInscription', inscrit);
  //       console.log("response : ", response.data.success);

  //     } catch (error) {
  //       console.error('Error:', error);
  //       setMessageErreur('Erreur lors de la vérification de l\'e-mail. Veuillez réessayer.');
  //     }
  //   }

  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Résultats</h2>
              </label>
            </div>

            <p>Nous vous remercions de votre participation !</p>

            <p>Nous avons établi les habitudes suivantes en fonction du profil que vous venez de renseigner :</p>
            <p>Ma principale motivation est {recupererStorage("motivation")}.</p>
            <p>Je dors {recupererStorage("sommeil")}.</p>
            <p>Je fais du sport {recupererStorage("sport")} par mois.</p>
            <p>Je médite {recupererStorage("meditation")} par mois.</p>

            <p>Nous vous proposons les habitudes suivantes :</p>
            {afficherNouvellesTaches(habitudesAuto)}

            <br />
            <div class="row container-fluid m-auto">


              <div class="col">
                <BoutonSuivant page="9" texte="Liste tâches" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
