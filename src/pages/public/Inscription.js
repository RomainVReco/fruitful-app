import React from "react";
import { useState } from "react";
import velo from "../../assets/inscription/velo.png";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import InputProfilText from "../../components/InputProfilText";

export default function Inscription() {
  var dateNaissance = "";
  var email = "";
  var motDePasse = "";
  var motDePasse2 = "";
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const handleChangeNom = (e) => {
    console.log(e.target.value)
    setNom(e.target.value); // Mettre à jour le nom dans l'état
  };

  const handleChangePrenom = (e) => {
    console.log(e.target.value)
    setPrenom(e.target.value); // Mettre à jour le prénom dans l'état
  };
  let url = "../Inscription2";
  const navigate = useNavigate();

  const handleClick = () => {
    // On autorise les lettres majuscules, minuscules, accentuées, les espaces et les apostrophes :
    const regex = /^[a-zÀ-ÿA-Z'-\s]+$/;
    
    // On retire les espaces avant et après les caractères du nom et du prénom :
    let nomTraite=nom.replace(/^\s+|\s+$/g, ''); //
    let prenomTraite=prenom.replace(/^\s+|\s+$/g, '');

    if (!nom.match(regex) || !prenom.match(regex)) {
      setMessageErreur(
        "Le nom et le prénom doivent contenir uniquement des lettres."
      );
    } else {
      setMessageErreur(""); // Effacer le message d'erreur s'il n'y a pas d'erreur
      sessionStorage.setItem("nom", nomTraite);
      sessionStorage.setItem("prenom", prenomTraite);

      navigate(url);

      return;
    }
  };
  //*********************************************************************************************************************************** */
  function AffichageImage() {
    return (
      <div className="centre">

        <img className='imageInscription' src={velo} alt="Vélo" />

      </div>
    );
  }
  //*********************************************************************************************************************************** */

  return (

    <div className="fond-inscription">
    
      <div className="container corps-inscription d-flex flex-column align-items-center">
        
        <div className="d-flex flex-column">
          <label for="comment">
            <h2>Comment pouvons-nous vous appeler ?</h2>
          </label>
          <AffichageImage />
          <InputProfilText label='prenom' method={handleChangePrenom}
            exemple='Veuillez indiquer votre prenom' />
          <InputProfilText label='nom' method={handleChangeNom}
            exemple='Veuillez indiquer votre nom' />

          <button
            className="btn boutonValiderSuivant mt-4"
            onClick={handleClick}>
            Suivant
          </button>
          {/* Affichage du message d'erreur */}
          {messageErreur && <p>{messageErreur}</p>}
        </div>

      </div>
    </div>
  );
}
