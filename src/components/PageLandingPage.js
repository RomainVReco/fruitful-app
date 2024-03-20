import React from "react";


import ImageAccueil from './ImageAccueil'
import logo1 from '../assets/Ciel_Bleu_Mieux_Vivre.png';
import logo2 from '../assets/tableau_bord.png';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function PageLandingPage () {
    
      function BoutonRejoindreAventure() {
        const buttonStyle = {
            fontSize: '2rem',
            padding: '30px 40px',
            margin: '50px',
          };

        return (
            <Container fluid className="d-flex justify-content-center align-items-center vh-30">
            <Row>
              <Col className="text-center">
                <Link to="/pageInscriptionPremium">
                  <Button variant="warning" style={buttonStyle}>Je rejoins l'aventure!</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        );
      }
    
    return (

    <div class="container-fluid" className="PageLandingPage">
        <ImageAccueil src={logo1} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" />
        <ImageAccueil src={logo2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonRejoindreAventure />
    </div>
  );
}



