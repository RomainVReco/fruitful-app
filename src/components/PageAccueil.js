import React from "react";

import Header from './Header'; 
import Image1Accueil from './Image1Accueil'
import Carousel from './Carousel'


export default function PageAccueil () {
    
    return (

    <div class="container-fluid" className="PageAccueil">
    <Header />
    <Image1Accueil />
    <Carousel />
      {/* Autres composants ou contenu ici */}
    </div>
  );
}

