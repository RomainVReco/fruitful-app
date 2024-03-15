import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/tournesol.png'; // Assurez-vous de spécifier le bon chemin vers votre image

function Image1Accueil() {
  return (
    <div>
      {/* Utilisation du composant Image de React Bootstrap */}
      <Image src={logo} alt="Logo" fluid />
    </div>
  );
}

export default Image1Accueil;