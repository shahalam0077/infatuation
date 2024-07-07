import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import clientLogo1 from '../../../images/client-logo-1.png';
import clientLogo2 from '../../../images/client-logo-2.png';
import clientLogo3 from '../../../images/client-logo-3.png';
import clientLogo4 from '../../../images/client-logo-4.png';
import clientLogo5 from '../../../images/client-logo-5.png';

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();

const items = [
  <img src={clientLogo1} onDragStart={handleDragStart} role="presentation" />,
  <img src={clientLogo2} onDragStart={handleDragStart} role="presentation" />,
  <img src={clientLogo3} onDragStart={handleDragStart} role="presentation" />,
  <img src={clientLogo4} onDragStart={handleDragStart} role="presentation" />,
  <img src={clientLogo5} onDragStart={handleDragStart} role="presentation" />,
];

const responsive = {
  0: { items: 5 },
  568: { items: 5 },
  1024: { items: 5,
	itemsFit: 'contain', },
};

const Gallery = () => (
  <div className="carousel-container">
    <AliceCarousel
	paddingLeft={60}
	
      mouseTracking
      items={items}
      infinite
      autoPlay
      autoPlayInterval={3000}
      disableDotsControls
      responsive={responsive}
      renderPrevButton={() => (
        <button className="carousel-button carousel-button-prev">‹</button>
      )}
      renderNextButton={() => (
        <button className="carousel-button carousel-button-next">›</button>
      )}
    />
  </div>
);

export default Gallery;
