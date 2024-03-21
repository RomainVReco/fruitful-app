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
import contact from "../assets/contact.png";  

export default function Inscription() {
  function AffichageImage() {
    return (
      <div>
        <img src={contact} alt="Contact" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <label for="comment">
              <h2>On reste en contact</h2>
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

            <BoutonSuivant page="4"/>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
