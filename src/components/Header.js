import React from "react";
import logoComplet from '../assets/logo-fruit-titre.png'


function Header() {
  return (

    <nav>
      <div className="d-flex justify-content-evenly">
        <img src={logoComplet} alt="logo fruitful" className=""></img>
        <ul>
          <li>Accueil</li>
          <li>Tâches</li>
          <li>Nouveau</li>
          <li>Planning</li>
          <li>Profil</li>
        </ul>
        <div>
          <a href="#" className="btn">S'inscrire</a>
        </div>
        <div>
          <a href="#" className="btn">Se connecter</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;