import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  unstable_HistoryRouter,
  useNavigate,
  Navigate,
} from "react-router-dom";
import contact from "../../assets/contact.png";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Inscription3() {
  const headers = {
    'Content-Type': 'application/json'
  }

  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState({ email: "" });
  const [motDePasse, setMotDePasse] = useState("");
  const [motDePasse2, setMotDePasse2] = useState("");
  const [messageErreur, setMessageErreur] = useState("");
  const [emailExiste, setEmailExiste] = useState(false);
  
  const handleChangeEmail = (e) => {
    setEmail(prevState => ({ ...prevState, [e.target.id]: e.target.value })); // Mettre à jour l'email dans l'état
  };
  const handleChangeMotDepasse = (e) => {
    setMotDePasse(e.target.value); // Mettre à jour le premier mot de passe dans l'état
  };
  const handleChangeMotDePasse2 = (e) => {
    setMotDePasse2(e.target.value); // Mettre à jour le second mot de passe dans l'état
  };
  const checkEmail = async (email) => {
    console.log("email avant try :", email);
    try {
      const response = await axios.post('http://localhost:8081/checkEmail', email);
      console.log("response : ", response.data.success);
      if (response.data.success=="success") {
        setEmailExiste(true);
        setMessageErreur("Cet e-mail est déjà utilisé. Veuillez vous connecter ici :");
        console.log("erreur email déjà présent");
      } else {
        // Continue with registration process
        console.log("Email non présent en base");
        // navigate(url);
      } 
    } catch (error) {
      console.error('Error:', error);
      setMessageErreur('Erreur lors de la vérification de l\'e-mail. Veuillez réessayer.');
    }
  }

  let url = "../Renseignement";
  const navigate = useNavigate();
  //----------------------------------------------------------------------------------------------------------------
  const handleClick = (event) => {
    event.preventDefault();
    const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/gm;
    const regexMotDePasse = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    //---------------tests

    let erreur = "";
    if (!email["email"].match(regexEmail)) {
      erreur = "L'email entré est invalide, merci de l'entrer à nouveau.\n";
      console.log(erreur);
    };
    if (!motDePasse.match(regexMotDePasse) || !motDePasse2.match(regexMotDePasse)) {
      erreur += "Le mot de passe doit avoir plus de 8 caractères et comporter au moins une majuscule, une minuscule, un chiffre et un caractère spécial.\n";
    };
    if (motDePasse != motDePasse2) {
      erreur += "Les mots de passe ne correspondent pas."
    };

    setMessageErreur(erreur);

    if (erreur == "") {
      console.log(email, motDePasse);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("motDePasse", motDePasse);
      console.log("affichage 2 :", email, motDePasse);

      checkEmail(email);
      return;
    };


  };

  function AffichageImage() {
    return (
      <div>
        <img src={contact} alt="Contact" style={{ height: 400, padding: 50 }} />
      </div>
    );
  }

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
            <div>
              <AffichageImage />
            </div>
            <div class="row">
              <div class="col-sm-2"></div>
              <div class="col-sm-8">

                <input
                  className="form-control"
                  rows="1"
                  id="email"
                  name="email"
                  placeholder="Veuillez indiquer votre email"
                  onChange={handleChangeEmail}

                ></input>
                <br></br>

                <p></p>
                <input
                  type="password"
                  className="form-control"
                  rows="1"
                  id="motDePasse"
                  name="motDePasse"
                  placeholder="Veuillez indiquer votre mot de passe"
                  onChange={handleChangeMotDepasse}

                ></input>
                <br></br>

                <p></p>
                <input
                  type="password"
                  className="form-control"
                  rows="1"
                  id="motDePasse2"
                  name="motDePasse2"
                  placeholder="Veuillez retaper votre mot de passe"
                  onChange={handleChangeMotDePasse2}

                ></input>
              </div>
              <div class="col-sm-2"></div>
            </div>
            <br></br>

            <button
              className="btn boutonValiderSuivant"
              onClick={handleClick}
            >
              Suivant
            </button>
            {/* Affichage du message d'erreur */}
            {messageErreur && <p>{messageErreur}</p>}
            {emailExiste && <Link to="/login">Login</Link>}
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}
