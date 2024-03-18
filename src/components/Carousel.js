import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import logo1 from '../assets/Ciel_Bleu_Mieux_Vivre.png';
import logo2 from '../assets/lever-soleil-montagne_carousel.png';
import logo3 from '../assets/rayons_foret_carousel.png';

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '200px' }}>
      <Carousel.Item>
        <Image src={logo1} className="d-block w-100 h-100 object-cover" alt="image1" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={logo2} className="d-block w-100 h-100 object-cover" alt="image2" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={logo3} className="d-block w-100 h-100 object-cover" alt="image3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;

