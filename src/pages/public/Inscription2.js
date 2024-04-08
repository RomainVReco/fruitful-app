import React from "react";
import { useState } from "react";
import bebe from '../../assets/inscription/bebe.png'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";

export default function Inscription2() {
  // On modifie le format de la date de naissance pour correspondre au format SQL (YYYY-MM-DD)
  function formatDate(date) {
    const [jour, mois, annee] = date.split('/');
    return `${annee}-${mois}-${jour}`;
  }

  const [dateNaissance, setDate] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const handleChangeDate = (e) => {
    setDate(e.target.value); // Mettre à jour la date dans l'état
  };

  let url = "../Inscription3";
  const navigate = useNavigate();

  const handleClick = () => {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    let formatAnnee = 4;
    try {
      let traitementDate = dateNaissance.split("/");
      if (traitementDate[2].length != 4) formatAnnee = 2;
    } catch (e) {
      console.log(e);
      setMessageErreur("Une erreur a été détectée dans la date indiquée.");
    }
    if (dateNaissance.match(regex) == null || formatAnnee != 4) {
      setMessageErreur(
        "La date doit être au format 01/01/1970 et doit être valide."
      );
    } else {
      setMessageErreur(""); // Effacer le message d'erreur s'il n'y a pas d'erreur    
      // Appel de fonction pour reformater la date au format SQL (YYYY-MM-DD)
      // En effet cette variable de sessionStorage est récupérée en fin de parcours d'inscrition pour être éventuellement écrite en BDD
      let dateNaissanceFormatSQL = formatDate(dateNaissance);
      sessionStorage.setItem("dateNaissance", dateNaissanceFormatSQL);
      navigate(url);

      return;
    }
  };
  //******************************************************************************************
  function AffichageImage() {
    return (
      <div className="centre mt-4 mb-6">
        <img src={bebe} alt="Bébé" className="imageInscription mb-6" />
      </div>
    );
  }
  //******************************************************************************************

  return (
    <>
      <div className="fond-inscription">
        <div className="container corps-inscription d-flex flex-column align-items-center">
          <div className="d-flex flex-column">

            <h2 className="centre">Quelle est votre date de naissance ?</h2>

            <AffichageImage />

            <input
              className="form-control mt-4 profil-border"
              rows="1"
              id="dateNaissance"
              name="dateNaissance"
              placeholder="Format 01/01/1970"
              onChange={handleChangeDate}

            ></input>

            <br />
            <button
              className="btn boutonValiderSuivant"
              onClick={handleClick}
            >
              Suivant
            </button>
            {/* Affichage du message d'erreur */}
            {messageErreur && <p>{messageErreur}</p>}
          </div></div>

      </div>
    </>
  );
}
