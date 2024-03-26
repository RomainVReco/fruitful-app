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
import Inscription3 from "./Inscription3";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";

export default function Inscription2() {
  const [dateNaissance, setDate] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const handleChangeDate = (e) => {
    setDate(e.target.value); // Mettre à jour la date dans l'état
  };

  let url = "../Inscription3";
  const navigate = useNavigate();

  const handleClick = () => {
    const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    let formatAnnee = 4;
    let traitementDate = dateNaissance.split("/");
    if (traitementDate[2].length != 4) formatAnnee = 2;

    if (!dateNaissance.match(regex) || formatAnnee != 4) {
      setMessageErreur(
        "La date doit être au format 01/01/1970 et doit être valide."
      );
    } else {
      setMessageErreur(""); // Effacer le message d'erreur s'il n'y a pas d'erreur

      let traitementDate = dateNaissance.split("/");
      if (traitementDate[2].length == 2) {
        if (Number(traitementDate[2]) > 30) {
          traitementDate[2] = "19" + traitementDate[2];
        }
        else { traitementDate[2] = "20" + traitementDate[2]; };
      }

      sessionStorage.setItem("dateNaissance", dateNaissance);

      navigate(url);

      return;
    }
  };

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
        <div className="row">
          <div className="col"></div>
          <div className="col corps-inscription">
            <div>
              <label for="comment">
                <h2>Quelle est votre date de naissance ?</h2>
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
                  id="dateNaissance"
                  name="dateNaissance"
                  placeholder="Format 01/01/1970"
                  onChange={handleChangeDate}

                ></input>
              </div>
              <div className="col-sm-2"></div>
            </div>
            <br />
            <button
              className="btn boutonValiderSuivant"
              onClick={handleClick}
            >
              Suivant
            </button>
            {/* Affichage du message d'erreur */}
            {messageErreur && <p>{messageErreur}</p>}
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
