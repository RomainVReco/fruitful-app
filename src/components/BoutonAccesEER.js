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
    };

  return (
    <div className="text-center m-5">
      <Link to="/Inscription">
        <Button className="btn-rejoindre" style={buttonStyle}>Je rejoins l'aventure!</Button>
      </Link>
    </div>
  );
}

export default BoutonAccesEER;



