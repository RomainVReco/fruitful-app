import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import logo1 from '../assets/accueil/palmier_lever_soleil.png';
import logo2 from '../assets/accueil/lever-soleil-montagne_carousel.png';
import logo3 from '../assets/accueil/rayons_foret_carousel.png';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid px-5">  
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: '300px' }}>
            <Image src={logo1} className="d-block w-100 h-100 object-cover" alt="image1" />
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
            <Image src={logo2} className="d-block w-100 h-100 object-cover" alt="image2" />
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
            <Image src={logo3} className="d-block w-100 h-100 object-cover" alt="image3" />
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default MyCarousel;

