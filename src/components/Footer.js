import React from "react";
import {Link} from 'react-router-dom'
import logoComplet from '../assets/header/logo-fruit-titre.png'


function Footer() {

  return (

    <nav className="footerBottom">
      <div className="footer-container" >
        <div>
          <Link className="" to='/'>
            <img src={logoComplet} alt="logo fruitful" className="image-footer"></img>
          </Link>
        </div>
        <div>
            <Link className='lien' to="/PageQuiSommesNous">Qui sommes nous? </Link>
        </div>
      </div>
    </nav>
  );
}

export default Footer;