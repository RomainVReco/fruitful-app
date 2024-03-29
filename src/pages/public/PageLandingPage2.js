import React from "react";
import ImageAccueil from '../../components/ImageAccueil'
import image1 from '../../assets/fleurs_illustre_mieux_gerer_sa_vie.png';
import image2 from '../../assets/tableau_bord.png';

import BoutonAccesEER from '../../components/BoutonAccesEER';

export default function PageLandingPage2 () {
    
    return (

    <div class="container-fluid" className="PageLandingPage2">
        <ImageAccueil src={image1} alt="image du ciel bleu" brandText="" paragraphText="Mieux gérer sa vie" />
        <ImageAccueil src={image2} alt="image tableau de bord" brandText="" paragraphText="Grâce au tableau de bord, mettez le bon cap dans votre vie!" />
        <BoutonAccesEER/>
    </div>
  );
}



