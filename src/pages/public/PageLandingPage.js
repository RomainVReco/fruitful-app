import React from "react";
import ImageAccueil from '../../components/ImageAccueil'
import image1 from '../../assets/Ciel_Bleu_Mieux_Vivre.png';
import image2 from '../../assets/tableau_bord.png';
import BoutonAccesEER from '../../components/BoutonAccesEER';

export default function PageLandingPage () {
    
    return (

    <div class="container-fluid" className="PageLandingPage">
        <ImageAccueil src={image1} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" />
        <ImageAccueil src={image2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonAccesEER/>
    </div>
  );
}



