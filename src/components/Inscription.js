import React from "react";
import Header from "./Header";
import InputTache from "./InputGenericText";
import InputGenericText from "./InputGenericText";
import ModaleLogo from "./ModaleLogo";
import { useState } from "react";
import { ReactDOM } from "react";
import InputModalText from "./InputModalText";
import velo from "../assets/velo.png";

export default function Inscription() {
  function AffichageImage() {
    return (
      <div>
        <img src={velo} alt="Vélo" style={{ height: 400, padding: 50 }} />
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
              <h2>Comment pouvons-nous vous appeler ?</h2>
            </label>

            <AffichageImage />
            <p></p>
            <textarea
              className="form-control"
              rows="1"
              id="comment"
              name="text"
            ></textarea>
          </div>
          <div class="col"></div>
        </div>
      </div>

      {/* <GenericButton label="Valider" buttonStyle='boutonValider' method={handleSubmit}/> */}
    </>
  );
}
