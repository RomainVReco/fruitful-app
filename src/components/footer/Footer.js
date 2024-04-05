import React from "react";
import { Link } from 'react-router-dom'
import logoComplet from '../../assets/header/logo-fruit-titre.png'
import '../../components/footer/footer-css.css'


function Footer() {

  return (


    <footer className="footerBottom fixed-bottom">

      <div className="footer-container">
        <div className="left-column">
          <div>
            <Link className="" to='/'>
              <img src={logoComplet} alt="logo fruitful" className="image-footer" />
            </Link>
          </div>
        </div>
        <div className="center-column mt-3">
          <div className="vertical-footer-links">
            {/*<Link className='lien' to="/contactezNous">Contactez-nous</Link>*/}
            <Link className='lien' to="/PageQuiSommesNous">Qui sommes nous?</Link>
            <Link className='lien' to="/PageMentionsLegales">Mentions légales</Link>
          </div>
        </div>
        <div className="right-column mt-3">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Fruitful Coaching Numérique SARL.<br />Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;