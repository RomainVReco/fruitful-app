import React from "react";
import {Link} from 'react-router-dom'
import logoComplet from '../assets/logo-fruit-titre.png'
import '../App.css'



function Footer() {

  return (

    <footer className="footerBottom">
      <div className="footer-container" >
        <div>
          <Link className="" to='/'>
            <img src={logoComplet} alt="logo fruitful" className="image-footer"></img>
          </Link>
        </div>
        <div className="horizontal-footer-links">
            <Link className='lien' to="/PageQuiSommesNous">Contactez-nous</Link>
            <Link className='lien' to="/PageQuiSommesNous">Qui sommes nous?</Link>
            <Link className='lien' to="/PageQuiSommesNous">Mentions légales</Link>
            <Link className='lien' to="/PageQuiSommesNous">Copyright 2024</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;