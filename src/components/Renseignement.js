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
import banane from '../assets/banane.png';
import raisin from '../assets/raisin.png';

export default function Renseignement() {
  // function AffichageImage() {
  //   return (
  //     <div>
  //       <img src={contact} alt="Contact" style={{ height: 400, padding: 50 }} />
  //     </div>
  //   );

  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Quelle est votre principale motivation ?</h2>
              </label>
            </div>

            <EntreeObjectif fruit="banane" objectif="Se sentir mieux" />
            <EntreeObjectif fruit="raisin" objectif="Mieux gérer sa vie" />
            <EntreeObjectif fruit="pomme" objectif="Me détoxifier" />

            <br></br>
            <div class="row container-fluid m-auto">
              <div class="col">
                
                <BoutonPrecedent page="3" texte="Répondre plus tard" />
              </div>

              <div class="col">
                <BoutonSuivant page="5" texte="Suivant" />
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
