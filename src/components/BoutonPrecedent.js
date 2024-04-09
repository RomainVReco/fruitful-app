import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Fonction concernant le Bouton d'Acces à l'Entrée En Relation (EER) avec l'utilisateur (questionnaire pour mieux le connaitre)
function BoutonPrecedent(page) {
  var page2 = page.page;
  function adresseDestination(page2) {
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
        return "/estConnecte/ListeTaches";
    }
  }

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-30"
    >
      <Row>
        <Col className="text-center">
          <Link to={adresseDestination(page2)}>
            <Button className="btn boutonValiderPrecedent">{page.texte}</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BoutonPrecedent;
