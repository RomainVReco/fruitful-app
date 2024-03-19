import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import logoComplet from '../assets/logo-fruit-titre.png'
import profilIcone from '../assets/person-square.svg'
import closeIcon from '../assets/x-lg.svg'


function Header() {

  const [isConnected, setConnected] = useState(true)

  const blocConnexion = <>
    <div className="wrapper-lienHeader d-flex">
      <div className="lienHeader">
        <a href="#" className="btn">S'inscrire</a>
      </div>
      <div className="lienHeader">
        <a href="#" className="btn">Connexion</a>
      </div>
    </div></>

  const estConnecte = <>
    <div className="lienHeader icon-media">
      <div className="dropwdown">
        <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FFF" class="bi bi-person-square" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
          </svg>
        </a>
        <ul className="dropdown-menu">
          <li><a href="#" className="dropdown-item">Mon profil</a></li>
          <li><a href="#" className="dropdown-item">Mon bilan</a></li>
          <li><a href="#" className="dropdown-item">Mes tâches</a></li>
          <li><a href="#" className="dropdown-item">Abonnement</a></li>
          <li><a href="#" className="dropdown-item">Déconnexion</a></li>
        </ul>
      </div>
    </div>
  </>

  return (

    <nav className="headerTop">
      <div className="header-container" >
        <div>
          <Link className="" to='/'>
            <img src={logoComplet} alt="logo fruitful" className="image-header"></img>
          </Link>
        </div>
        <div><img src={closeIcon} className="icon-test"></img></div>
        <ul className="listeMenu show-content">
          <li className="liensNav">
            <Link className='lien' to="/">Tâches</Link></li>
          <li className="liensNav">
            <Link className='lien' to="/creationTache">Nouveau</Link>
          </li>
          <li className="liensNav">
            <Link className='lien' to='/planning'>Planning</Link>
          </li>
        </ul>
        {isConnected ? estConnecte : blocConnexion}


        {/*
        <div className="lienHeader">
          <a href="#" className="btn">S'inscrire</a>
        </div>
        <div className="lienHeader">
          <a href="#" className="btn">Connexion</a>
        </div>
        */}
      </div>
    </nav>
  );
}

export default Header;