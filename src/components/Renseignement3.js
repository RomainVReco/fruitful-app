import React from "react";
import Header from "./Header";
import InputTache from "./InputGenericText";
import InputGenericText from "./InputGenericText";
import ModaleLogo from "./ModaleLogo";
import { useState } from "react";
import { ReactDOM } from "react";
import InputModalText from "./InputModalText";
import bebe from "../assets/bebe.png";
import GenericButton from "./GenericButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inscription2 from "./Inscription2";
import Inscription3 from "./Inscription3";
import BoutonSuivant from "./BoutonSuivant";
import BoutonPrecedent from "./BoutonPrecedent";
import contact from "../assets/contact.png";
import EntreeObjectif from "./EntreeObjectif";
import banane from "../assets/banane.png";
import raisin from "../assets/raisin.png";

export default function Renseignement3() {
  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Se sentir mieux</h2>
                <h3>Chaque mois je fais du sport :</h3>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Entre 0 et 2 fois" />
            <EntreeObjectif fruit="banane" objectif="Entre 3 et 5 fois" />
            <EntreeObjectif fruit="banane" objectif="6 fois et plus" />

            <br />
            <div class="row container-fluid m-auto">
              <div class="col">
                <BoutonPrecedent page="5" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="7" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
