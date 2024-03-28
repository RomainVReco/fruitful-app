import React from "react";

import ImageAccueil from "../../components/ImageAccueil";
import BoutonAccesEER from "../../components/BoutonAccesEER";
import Carousel from "../../components/Carousel";
import image1 from "../../assets/tournesol.png";
import image2 from "../../assets/Ciel_Bleu_Mieux_Vivre.png";
import image3 from "../../assets/fleurs_illustre_mieux_gerer_sa_vie.png";
import image4 from "../../assets/ciel_nuageux_Mieux_gerer_ses_addictions.png";

export default function PageAccueil() {

  return (
  <div className="container-fluid PageAccueil">
    <ImageAccueil
      src={image1}
      alt="image avec un tournesol"
      brandText=""
      paragraphText="Apprenez à faire rayonner votre vie! Fruitful, Votre coach, est là pour vous aider!"
      />

    <br />
    <br />
    <br />
    <br />

    <div className="carousel-container">
      <Carousel />
    </div>

    <br />
    <br />
    <br />
    <br />

    <ImageAccueil src={image2} alt="image du ciel bleu" brandText="" paragraphText="Mieux être" link="/PageLandingPage" />

    <br />

    <ImageAccueil src={image3} alt="image de fleurs" brandText="" paragraphText="Mieux gérer sa vie" link="/PageLandingPage2" />

    <br />

    <ImageAccueil src={image4} alt="image de fleurs" brandText="" paragraphText="Se libérer de ses addictions" link="/PageLandingPage3" />

    <br />
    <br />

    <BoutonAccesEER/>

    <br />

  </div>


  )
}
