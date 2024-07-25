import React from 'react';
import '../css/videoBanner.css';

const VideoBanner: React.FC = () => {
  return (
    <div className="video-banner">
      <iframe
        className="video-banner-video"
        src="https://www.youtube.com/embed/N60_oXI3wtQ?autoplay=1&mute=&loop=1&playlist=N60_oXI3wtQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="video-banner-content">
        <h1>Exclusive Offers</h1>
        <p>Discover our latest collections at amazing prices.</p>
        <button className="video-banner-button">Shop Now</button>
      </div>
    </div>
  );
};

export default VideoBanner;
