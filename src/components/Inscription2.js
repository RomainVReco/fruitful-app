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

export default function Inscription() {
  function AffichageImage() {
    return (
      <div>
        <img src={bebe} alt="Bébé" style={{ height: 400, padding: 50 }} />
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
              <h2>Quelle est votre date de naissance ?</h2>
            </label>

            <AffichageImage />
            <input
              className="form-control"
              rows="1"
              id="dateNaissance"
              name="dateNaissance" placeholder="Veuillez indiquer votre date de naissance"
            ></input>
            <br></br>

            <BoutonSuivant page="3" texte="Suivant"/>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
