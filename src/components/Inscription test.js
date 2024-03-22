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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Inscription() {
  class RenseignementsInscription {
    constructor(nom, dateNaissance, email, motDePasse, motDePasse2) {
      this.nom;
      this.dateNaissance;
      this.email;
      this.motDePasse;
      this.motDePasse2;
    }
  }
  var renseignementsInscription = new RenseignementsInscription();

  
  constructor(props);
  var nom = "";
  var dateNaissance = "";
  var email = "";
  var motDePasse = "";
  var motDePasse2 = "";

  var page = 1;

  const pages = {
    1: "Comment pouvons-nous vous appeler ?",
    2: "Quelle est votre date de naissance ?",
    3: "On reste en contact",
  };

  function AffichageImage() {
    return (
      <div>
        <img src={velo} alt="Vélo" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }

  function AffichageTitre(page) {
    console.log("page = ", pages[page]);
  }

  function handleSubmit(page2) {
    console.log("page submit : ", page2);

    AffichageTitre(page2);
  }

  return (
    <>
      <Header />
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <label for="comment">
              <h2>
                <AffichageTitre />
              </h2>
            </label>

            <AffichageImage />
            <p></p>
            <input
              className="form-control"
              rows="1"
              id="comment"
              name="text"
            ></input>
            <br></br>
            <a href="#" className="btn boutonValider" onClick={handleSubmit(2)}>
              Suivant
            </a>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
