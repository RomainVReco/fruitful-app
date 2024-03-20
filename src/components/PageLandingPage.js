import React from "react";


import ImageAccueil from './ImageAccueil'
import logo1 from '../assets/Ciel_Bleu_Mieux_Vivre.png';
import logo2 from '../assets/tableau_bord.png';
import Carousel from './Carousel'


export default function PageLandingPage () {
    
    return (

    <div class="container-fluid" className="PageLandingPage">
        <ImageAccueil src={logo1} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" />
        <ImageAccueil src={logo2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        {/* Autres composants ou contenu ici */}
    </div>
  );
}

