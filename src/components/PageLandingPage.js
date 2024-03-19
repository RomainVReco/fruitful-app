import React from "react";

import ImageAccueil from './ImageAccueil'
import Image1Accueil from './Image1Accueil'
//import Image2Accueil from './Image2Accueil'
import Carousel from './Carousel'
import logo2 from '../assets/tableau_bord.png';
import logo1 from '../assets/Ciel_Bleu_Mieux_Vivre.png';


export default function PageLandingPage () {
    
    return (

    <div class="container-fluid" className="PageLandingPage">
        <ImageAccueil src={logo1} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" />
        <ImageAccueil src={logo2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        {/* Autres composants ou contenu ici */}
    </div>
  );
}

