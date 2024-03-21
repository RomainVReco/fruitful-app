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

export default function Inscription() {
 
  function AffichageImage() {
    return (
      <div>
        <img src={bebe} alt="Bébé" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }

  function handleSubmit(page) {
    console.log("page submit : ", page);

    <Router>
      <Routes>
        <Route path ="/inscription2" element={<Inscription3/>} />
        </Routes>
    </Router>
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
              Quelle est votre date de naissance ?
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
            <a href="#" className="btn boutonValider" onClick={handleSubmit(3)}>
        

              Suivant
            </a>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
