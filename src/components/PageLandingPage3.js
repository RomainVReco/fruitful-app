import React from "react";


import ImageAccueil from './ImageAccueil'
import logo1 from '../assets/ciel_nuageux_Mieux_gerer_ses_addictions.png';
import logo2 from '../assets/tableau_bord.png';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BoutonAccesEER from './BoutonAccesEER';

export default function PageLandingPage3 () {
    
    return (

    <div class="container-fluid" className="PageLandingPage3">
        <ImageAccueil src={logo1} alt="image du ciel bleu" brandText="" paragraphText="Se libérer de ses addictions" />
        <ImageAccueil src={logo2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonAccesEER/>
    </div>
  );
}



