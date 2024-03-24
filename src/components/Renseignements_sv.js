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


  class CaseACocher extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      console.log('App started');
      this.defaultProps = {
        checked: false
      } return '<input type = 'checkbox' checked = {this.checked} name =
                              'controlled'>< /input>'
    }
  }


export default function Renseignements () {



  return (
    <>
      <div className="fond-inscription">
        <div className="row ">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
            <label for="comment">
              <h2>On reste en contact</h2>
            </label>
            </div>
  
 

            <BoutonSuivant page="4" texte="C'est parti !" />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
