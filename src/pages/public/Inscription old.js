import React from "react";
import Header from "../../components/Header";
import InputTache from "../../components/InputGenericText";
import InputGenericText from "../../components/InputGenericText";
import ModaleLogo from "../../components/ModaleLogo";
import { useState } from "react";
import { ReactDOM } from "react";
import InputModalText from "../../components/InputModalText";
import velo from "../assets/velo.png";
import GenericButton from "../../components/GenericButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Inscription() {
  function AffichageImage() {
    return (
      <div>
        <img src={velo} alt="Vélo" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }
  let page = 1;

  function handleSubmit() {
    if ((page = 1)) {
      <Route path="/inscription2" element={<Inscription2 />} />;
    }
  }

  return (
    <>
      <Header />
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <label for="comment">
              <h2>Comment pouvons-nous vous appeler ?</h2>
            </label>

            <AffichageImage />
            <p></p>
            <input
              className="form-control"
              rows="1"
              id="comment"
              name="text"
            ></input>
          </div>
          <div class="col"></div>
        </div>
      </div>

      <GenericButton
        label="Suivant"
        buttonStyle="boutonValider"
        method={handleSubmit}
      />
    </>
  );
}
