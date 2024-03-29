import React from "react";
import ImageAccueil from '../../components/ImageAccueil'
import image1 from '../../assets/ciel_nuageux_Mieux_gerer_ses_addictions.png';
import image2 from '../../assets/tableau_bord.png';

import BoutonAccesEER from '../../components/BoutonAccesEER';

export default function PageLandingPage3 () {
    
    return (

    <div class="container-fluid" className="PageLandingPage3">
        <ImageAccueil src={image1} alt="image du ciel bleu" brandText="" paragraphText="Se libérer de ses addictions" />
        <ImageAccueil src={image2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonAccesEER/>
    </div>
  );
}



