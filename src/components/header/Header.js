import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import logoComplet from '../../assets/header/logo-fruit-titre.png'
import closeIcon from '../../assets/header/x-lg.svg'
import menu from '../../assets/header/list.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { gestionConnexion } from "../../_helpers/gestion.connexion";
import '../../components/header/header-css.css'


function Header() {

  let navigate = useNavigate()

  const [isConnected, setConnected] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [menuCloseIcon, setIcon] = useState(menu)
  const [menuConnexion, setMenuConnexion] = useState('')


  useEffect(() => {
    if (gestionConnexion.isLogged()) {
      setConnected(true)
    } else setConnected(false)
  }, [gestionConnexion.isLogged()])

  const handleClickMenu = () => {
    console.log("handleClick", "isMenuOpen : " + isMenuOpen)
    console.log("handleClick", "!isMenuOpen : " + !isMenuOpen)
    setMenuOpen(!isMenuOpen)
    setIcon(!isMenuOpen ? closeIcon : menu)
    console.log("handleClick", "isMenuOpen : " + isMenuOpen)
  }

  const handleLogout = () => {
    gestionConnexion.deconnexion()
    navigate("../pageAccueil")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg headerTop ">
        <div className="container d-flex align-items-center justify-content-evenly">
          <div className="d-flex align-items-center">
            <Link className="" to='/'>
              <img src={logoComplet} alt="logo fruitful" className="image-header"></img>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`listeMenu show-content`}>
              <Link className='liensNav' to="/estConnecte/listeTaches"><li className="lien">
                Évènements</li></Link>
              <Link className='liensNav' to="/estConnecte/creationTache"><li className="lien">
                Nouveau</li></Link>
              <Link className='liensNav' style={{ color: "grey" }} ><li className="lien" >
                Planning</li></Link>
              {isConnected ? <Link className='liensNav' to="/estConnecte/profil"><li className="lien">
                Mon compte</li></Link> :
                <>
                  <Link className='liensNav' to="/inscription" ><li className="lien" >
                    Inscription</li></Link>
                  <Link className='liensNav' to="/estConnecte/profil"><li className="lien">
                    Connexion</li></Link></>}


            </ul>
          </div>
        </div>
      </nav>

    </div>
    /*
        <nav className="headerTop d-flex align-items-center">
          <div className="header-container" >
            <div>
              <Link className="" to='/'>
                <img src={logoComplet} alt="logo fruitful" className="image-header"></img>
              </Link>
            </div>
            <div ><img src={menuCloseIcon} className="menu-burger" onClick={handleClickMenu}></img></div>
            <ul className={`listeMenu show-content`}>
              <Link className='liensNav' to="/estConnecte/listeTaches"><li className="lien">
                Tâches</li></Link>
              <Link className='liensNav' to="/estConnecte/creationTache"><li className="lien">
                Nouveau</li></Link>
              <Link className='liensNav' style={{ color: "grey" }} ><li className="lien" >
                Planning</li></Link>
              <Link className={`liensNav ${isConnected ? 'd-none' : ''}`} to="/inscription" ><li className="lien" >
                Inscription</li></Link>
              <li className="liensNav"> {isConnected ? estConnecte : <a href="../login" className="lien line-connexion">Connexion</a>}</li>
            </ul>
          
          </div>
        </nav>
        */
  );
}

export default Header;