import React from "react";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Inscription from "./Inscription";
import inscription2 from "./Inscription2";
import inscription3 from "./Inscription3";

//Fonction concernant le Bouton d'Acces à l'Entrée En Relation (EER) avec l'utilisateur (questionnaire pour mieux le connaitre)
function BoutonSuivant(page) {
  console.log("page :", page.page);
  var page = page.page;
  function adresseDestination(page) {
    console.log("page :", page);

    switch (page) {
      case "2":
        return "/Inscription2";
      case "3":
        return "/Inscription3";
      case "4":
        return "/Inscription";
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
          <Link to={adresseDestination(page)}>
            <Button className="btn boutonValider">Suivant</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BoutonSuivant;
