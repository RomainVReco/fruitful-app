import React from "react";

import ImageAccueil from "../../components/ImageAccueil";
import imageFondateurs from "../../assets/footer/photo_fondateurs.png";

export default function PageQuiSommesNous() {

  return (
  <div className="container-fluid PageAccueil">
   <br />

    <ImageAccueil src={imageFondateurs} alt="photo des fondateurs" brandText="" paragraphText="Une passion commune pour le survitaminé!" />

    <br />
 

  </div>


  )
}
