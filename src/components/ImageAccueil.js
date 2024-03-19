import React from 'react';
import Image from 'react-bootstrap/Image';

function ImageAccueil({ src, alt, brandText, paragraphText }) {
  return (
    <nav className="navbar bg-body-tertiary rounded-pi11">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src={src} rounded alt={alt} className="img-fluid" style={{ maxWidth: '50%' }} />
          {brandText}
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <p className="display-5">{paragraphText}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ImageAccueil;