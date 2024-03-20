import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import Image from 'react-bootstrap/Image';


function ImageAccueil({ src, alt, brandText, paragraphText, link }) {
    const imageStyle = { width: '500px', height: 'auto' }; // Style de l'image
    const containerStyle = { width: imageStyle.maxWidth }; // Style du conteneur
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={containerStyle}>
        <nav className="navbar bg-body-tertiary rounded-pi11">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                {/*<Link className="navbar-brand" to="/PageLandingPage"> */}
                <Link className="navbar-brand" to={link}>
                    <Image src={src} rounded alt={alt} className="img" style={imageStyle} />
                    {brandText}
                </Link>
            </div>
            <div className="container-fluid text-center">
                <div className="row">

                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center">
                <h1>
                    {paragraphText}
                </h1>
            </div>
        </nav>
    </div>
  );
}

export default ImageAccueil;