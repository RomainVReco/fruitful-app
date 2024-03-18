import React from "react";
import {Link} from 'react-router-dom'
import logoComplet from '../assets/logo-fruit-titre.png'


function Header() {
  return (
    
    <nav className="headerTop">
      <div className="d-flex justify-content-evenly" >
        <Link className="" to='/'>
          <img  src={logoComplet} alt="logo fruitful" className="image-header"></img>
        </Link>
        <ul className="listeMenu">
          <li className="liensNav">
            <Link className='lien' to="/">Tâches</Link></li>
          <li className="liensNav">
            <Link className='lien' to="/creationTache">Nouveau</Link>
          </li>
          <li className="liensNav">
            <Link className='lien' to='/planning'>Planning</Link>
          </li>
        </ul>
        <div className="lienHeader">
          <a href="#" className="">S'inscrire</a>
        </div>
        <div className="lienHeader">
          <a href="#" className="btn">Connexion</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;