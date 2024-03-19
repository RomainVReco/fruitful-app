import React from 'react';
import Image from 'react-bootstrap/Image';

function ImageAccueil({ src, alt, brandText, paragraphText }) {
    const imageStyle = { width: '500px', height: 'auto' }; // Style de l'image
    const containerStyle = { width: imageStyle.maxWidth }; // Style du conteneur
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={containerStyle}>
        <nav className="navbar bg-body-tertiary rounded-pi11">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <a className="navbar-brand" href="#">
                <Image src={src} rounded alt={alt} className="img" style={imageStyle} />
                {brandText}
                </a>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                {/*<div className="col-12 text-center"> */}
                    {/*<p className="text-center">{paragraphText}</p> */}

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