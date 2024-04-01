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

  // On récupère les éléments écrits en sessionStorage des 3 pages d'inscription
  // et on les regroupe dans un objet que m'on passera à la fonction enregistrementInscription
  const [inscrit, setInscrit] = useState({
    nom: sessionStorage.getItem('nom'),
    prenom: sessionStorage.getItem('prenom'),
    dateNaissance: sessionStorage.getItem('dateNaissance'),
    email: sessionStorage.getItem('email'),
    password: sessionStorage.getItem('motDePasse'),
  })

  const handleChangeEmail = (e) => {
    setEmail(prevState => ({ ...prevState, [e.target.id]: e.target.value })); // Mettre à jour l'email dans l'état
  };
  const handleChangeMotDepasse = (e) => {
    setMotDePasse(e.target.value); // Mettre à jour le premier mot de passe dans l'état
  };
  const handleChangeMotDePasse2 = (e) => {
    setMotDePasse2(e.target.value); // Mettre à jour le second mot de passe dans l'état
  };
  //**************************************************************************************************************************** */ 
  const checkEmail = async (email, inscrit) => {
    console.log("email avant try :", email);
    try {
      const response = await axios.post('http://localhost:8081/checkEmail', email);
      console.log("Response : ", response.data.success);
      if (response.data.success == "success") {
        setEmailExiste(true);
        setMessageErreur("Cet e-mail est déjà utilisé. Veuillez vous connecter ici :");
      } else {
        // On poursuit le processus d'enregistrement

        console.log("inscrit  ", inscrit);
        enregistrementInscription(inscrit);
        setEmailExiste(true);
        setMessageErreur("Nous avons bien pris en compte votre inscription, veuillez vous connecter ici :");

        // On se déplace dans les pages renseignement
        // navigate(url);
      }
    } catch (error) {
      console.error('Error:', error, " email :", email);

      setMessageErreur('Erreur lors de la vérification de l\'e-mail. Veuillez réessayer.');
    }
  }
  //********************************************************************************************************************************** */
  // Enregistre le nouvel utilisateur en BDD
  const enregistrementInscription = async (inscrit) => {
    console.log("inscrit avant try :", inscrit);
    try {
      const response = await axios.put('http://localhost:8081/enregistrementInscription', inscrit);
      console.log("response : ", response.data.success);

    } catch (error) {
      console.error('Error:', error);
      setMessageErreur('Erreur lors de la vérification de l\'e-mail. Veuillez réessayer.');
    }
  }

  var url = "../inscrit/Renseignement";
  const navigate = useNavigate();
  //*********************************************************************************************************************************** */
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
      // S'il n'y a pas d'erreur on enregistre l'email en sessionStorage
      console.log(email, motDePasse);
      sessionStorage.setItem("email", email.email);
      sessionStorage.setItem("motDePasse", motDePasse);
      inscrit.email = email.email;
      inscrit.motDePasse = motDePasse;

      console.log("email :", email, motDePasse, " inscrit : ", inscrit);

      checkEmail(email, inscrit);
      return;
    };

  };
  //*********************************************************************************************************************************** */
  function AffichageImage() {
    return (
      <div>
        <img src={contact} alt="Contact" style={{ height: 350, padding: 30 }} />
      </div>
    );
  }
  //*********************************************************************************************************************************** */

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
