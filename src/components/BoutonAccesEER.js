import React from "react";

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Fonction concernant le Bouton d'Acces à l'Entrée En Relation (EER) avec l'utilisateur (questionnaire pour mieux le connaitre)
function BoutonAccesEER() {
  const buttonStyle = {
      fontSize: '2rem',
      padding: '30px 40px',
      margin: '50px',
    };

  return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-30">
      <Row>
        <Col className="text-center">
          <Link to="/Inscription">
            <Button variant="warning" style={buttonStyle}>Je rejoins l'aventure!</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BoutonAccesEER;



