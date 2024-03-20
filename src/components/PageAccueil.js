import React from "react";

import Header from './Header';
import ImageAccueil from './ImageAccueil'
import Carousel from './Carousel'
import logo1 from '../assets/tournesol.png';
import logo2 from '../assets/Ciel_Bleu_Mieux_Vivre.png';
import logo3 from '../assets/fleurs_illustre_mieux_gerer_sa_vie.png';
import logo4 from '../assets/ciel_nuageux_Mieux_gerer_ses_addictions.png';
import BankInfoForm from './BankInfoForm';

export default function PageAccueil () {
    
    return (

    <div className="container-fluid PageAccueil">
        <ImageAccueil src={logo1} alt="image avec un tournesol" brandText="" paragraphText="Apprenez à faire rayonner votre vie! Fruitful, Votre coach, est là pour vous aider!" />
        
        <br />
        <br />
        <br />
        <br />


        <Carousel />

        <br />
        <br />
        <br />
        <br />

        <ImageAccueil src={logo2} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" />
        <div>

        <br />

        </div>
            <ImageAccueil src={logo3} alt="image de fleurs" brandText="" paragraphText="Mieux gérer sa vie" />
        {/*</div> */}

        <br />
        
        <ImageAccueil src={logo4} alt="image de fleurs" brandText="" paragraphText="Se libérer de ses addictions" />
        { /*<BankInfoForm /> */}
        {/* Autres composants ou contenu ici */}
    </div>
  );
}

