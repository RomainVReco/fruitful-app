import React from "react";
import Header from "./Header";
import InputTache from "./InputGenericText";
import InputGenericText from "./InputGenericText";
import ModaleLogo from "./ModaleLogo";
import { useState } from "react";
import { ReactDOM } from "react";
import InputModalText from "./InputModalText";
import velo from "../assets/velo.png";
import GenericButton from "./GenericButton";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Inscription2 from "./Inscription2";
import BoutonSuivant from "./BoutonSuivant";

export default function Inscription() {
  var dateNaissance = "";
  var email = "";
  var motDePasse = "";
  var motDePasse2 = "";
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const handleChangeNom = (e) => {
    setNom(e.target.value); // Mettre à jour le nom dans l'état
  };

  const handleChangePrenom = (e) => {
    setPrenom(e.target.value); // Mettre à jour le prénom dans l'état
  };
  let url = "../Inscription2";
  const Navigate = useNavigate();

  const handleClick = () => {
    const regex = /^[A-Za-z]+$/;
    console.log("nom : ", nom);
    console.log("prénom : ", prenom);

    if (!nom.match(regex) || !prenom.match(regex)) {
      setMessageErreur(
        "Le nom et le prénom doivent contenir uniquement des lettres."
      );
    } else {
      setMessageErreur(""); // Effacer le message d'erreur s'il n'y a pas d'erreur
      sessionStorage.setItem("Nom", nom);
      sessionStorage.setItem("Prénom", prenom);

      Navigate(url);

      return;
    }
  };

  function AffichageImage() {
    return (
      <div>
        <img src={velo} alt="Vélo" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }

  return (
    <>
      <div className="fond-inscription">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 corps-inscription">
            <div>
              <label for="comment">
                <h2>Comment pouvons-nous vous appeler ?</h2>
              </label>
            </div>
            <div>
              <AffichageImage />
            </div>

            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div>
                  <input
                    className="form-control"
                    rows="1"
                    id="prenom"
                    name="prenom"
                    placeholder="Veuillez indiquer votre prénom"
                    onChange={handleChangePrenom}
                  ></input>
                </div>

                <br />

                <div>
                  <input
                    className="form-control"
                    rows="1"
                    id="nom"
                    name="nom"
                    placeholder="Veuillez indiquer votre nom"
                    onChange={handleChangeNom}
                  ></input>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>

            <br />
            <div>
              <button
                className="btn boutonValiderSuivant"
                onClick={handleClick}
              >
                Suivant
              </button>
              {/* Affichage du message d'erreur */}
              {messageErreur && <p>{messageErreur}</p>}
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </>
  );
}
