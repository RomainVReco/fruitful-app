import React from "react";

import Header from './Header';
import ImageAccueil from './ImageAccueil'
import Image1Accueil from './Image1Accueil'
import Image2Accueil from './Image2Accueil'
import Carousel from './Carousel'
import logo3 from '../assets/fleurs_illustre_mieux_gerer_sa_vie.png';
import logo4 from '../assets/ciel_nuageux_Mieux_gerer_ses_addictions.png';

export default function PageAccueil () {
    
    return (

    <div class="container-fluid" className="PageAccueil">
    <Header />
    <Image1Accueil />
    <Carousel />
    <Image2Accueil />
    <ImageAccueil src={logo3} alt="image de fleurs" brandText="" paragraphText="Mieux gérer sa vie" />
    <ImageAccueil src={logo4} alt="image de fleurs" brandText="" paragraphText="Se libérer de ses addictions" />
      {/* Autres composants ou contenu ici */}
    </div>
  );
}

