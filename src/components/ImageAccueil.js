import React from 'react';
import Image from 'react-bootstrap/Image';

function ImageAccueil({ src, alt, brandText, paragraphText }) {
  return (
    <nav className="navbar bg-body-tertiary rounded-pi11">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="#">
          <Image src={src} rounded alt={alt} className="img-fluid" style={{ maxWidth: '50%' }} />
          {brandText}
        </a>
      </div>
      <div className="container text-center">
        <div className="row">
          {/*div className="col-12 text-center"> */}
            <p className="text-center">{paragraphText}</p>
            <p className="display-10 text-center">{paragraphText}</p>
          {/*</div> */}
        </div>
      </div>
    </nav>
  );
}

export default ImageAccueil;