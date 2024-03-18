import React from 'react';
import Image from 'react-bootstrap/Image';
import logo from '../assets/tournesol.png'; // Assurez-vous de spécifier le bon chemin vers votre image

function Image1Accueil() {
  return (
    <nav class="navbar bg-body-tertiary rounded-pi11">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <Image src={logo} rounded alt="Logo" className="img-fluid" style={{ maxWidth: '50%' }}/>
                Apprenez à faire rayonner votre vie
            </a>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <p className="display-5">FruitFul, votre coach, est là pour vous!!!</p>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Image1Accueil;