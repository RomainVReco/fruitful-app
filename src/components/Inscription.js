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
} from "react-router-dom";
import { Link } from "react-router-dom";
import Inscription2 from "./Inscription2";
import BoutonSuivant from "./BoutonSuivant";


export default function Inscription() {
  var nom = "";
  var dateNaissance = "";
  var email = "";
  var motDePasse = "";
  var motDePasse2 = "";

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
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <label for="comment">
              <h2>Comment pouvons-nous vous appeler ?</h2>
            </label>
            <AffichageImage />
            <input
              className="form-control"
              rows="1"
              id="nom"
              name="nom" placeholder="Veuillez indiquer votre nom"
            ></input>
            <br></br>
            <BoutonSuivant page="2" texte="Suivant"/>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
