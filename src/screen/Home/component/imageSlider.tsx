import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../home.css';
import clientLogo1 from "../../../images/client-logo-1.png";
import clientLogo2 from "../../../images/client-logo-2.png";
import clientLogo3 from "../../../images/client-logo-3.png";
import clientLogo4 from "../../../images/client-logo-4.png";
import clientLogo5 from "../../../images/client-logo-5.png";

const images = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
];

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ImageSlider = () => {
  
    return (
        
          <Carousel autoPlay responsive={responsive}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
          </Carousel>)

  };
  
  export default ImageSlider;