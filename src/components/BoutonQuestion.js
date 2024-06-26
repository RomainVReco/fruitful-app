import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Fonction concernant le Bouton d'Acces à l'Entrée En Relation (EER) avec l'utilisateur (questionnaire pour mieux le connaitre)
function BoutonQuestion(bouton) {

let action=bouton.action;

  function actionSurClic(action) {

    switch (page2) {
      case "2":
        return "/Inscription2";
      case "3":
        return "/Inscription3";
      case "4":
        return "/estConnecte/Renseignement";
      case "5":
        return "/estConnecte/Renseignement2";
      case "6":
        return "/estConnecte/Renseignement3";
      case "7":
        return "/estConnecte/Renseignement4";
      case "8":
        return "/estConnecte/Renseignement5";
      case "9":
        return "/estConnecte/ListeTaches";
    }
  }

  const buttonStyle = {
    fontSize: "2rem",
    padding: "30px 40px",
    margin: "50px",
  };
  var retour = "";

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-30"
    >
      <Row>
        <Col className="text-center">
            <Button className="btn boutonValiderSuivant" onClick={actionSurClic(action)}>{bouton.texte}</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BoutonSuivant;
