import React from "react";


import ImageAccueil from './ImageAccueil'
import image1 from '../assets/fleurs_illustre_mieux_gerer_sa_vie.png';
import image2 from '../assets/tableau_bord.png';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BoutonAccesEER from './BoutonAccesEER';

export default function PageLandingPage2 () {
    
    return (

    <div class="container-fluid" className="PageLandingPage2">
        <ImageAccueil src={image1} alt="image du ciel bleu" brandText="" paragraphText="Mieux gérer sa vie" />
        <ImageAccueil src={image2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonAccesEER/>
    </div>
  );
}



