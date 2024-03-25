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
        <div className="row">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Comment pouvons-nous vous appeler ?</h2>
              </label>
            </div>
            <div>
              <AffichageImage />
            </div>

            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  rows="1"
                  id="prenom"
                  name="prenom"
                  placeholder="Veuillez indiquer votre prénom"
                ></input>
              </div>

              <div className="col-sm-2"></div></div>
              <div className="row">
              <div className="col-sm-2"></div></div>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  rows="1"
                  id="nom"
                  name="nom"
                  placeholder="Veuillez indiquer votre nom"
                ></input>
              </div>
              <div className="col-sm-2"></div></div>

              <br></br>
              <div>
                <BoutonSuivant page="2" texte="Suivant" />
              </div>
              <div className="col"></div>
           
          </div>
        </div>
    </>
  );
}
