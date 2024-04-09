import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link depuis react-router-dom
import Image from 'react-bootstrap/Image';


function ImageAccueil({ src, alt, brandText, paragraphText, link }) {
    const imageStyle = { width: '500px', height: 'auto' }; // Style de l'image
    const containerStyle = { width: imageStyle.maxWidth }; // Style du conteneur
    const cursorStyle = link ? { cursor: 'pointer' } : {}; // Style du curseur au survol de l'image s'il y a un hyperlien sur l'image
    const hoverEffect = link ? { transition: 'transform 0.3s' } : {}; //Effet de survol d'une image ayant un hyperlien
    const imageClassName = link ? 'image-with-link' : 'image-no-link'; //S'il y a un hyperlien : la classe css associée à la classe Image (imageClassName) 
                                                      //sera 'img link': ce qui permet d'avoir un effet de survol (App.css)

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={containerStyle}>
        <nav className="navbar bg-body-tertiary rounded-pi11">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                {link ? (
                    <Link className="" to={link}>
                        <Image src={src} rounded alt={alt} className={imageClassName} style={{ ...imageStyle, ...cursorStyle, ...hoverEffect }}  />
                        {brandText}
                    </Link>
                ) : (
                    <div className="">
                        <Image src={src} rounded alt={alt} className={imageClassName} style={{ ...imageStyle }} />
                        {brandText}
                    </div>
                )}
            </div>
        </nav>
        <h3 style={{alignSelf:'center'}}>
                    {paragraphText}
                </h3>
    </div>
  );
}

export default ImageAccueil;