import React from 'react';
import '../css/multiFeature.css';

const MultiFeatureBanner = () => {
  return (
    <div className="multi-feature-banner">
      <div className="multi-feature-banner-card">
        <h2>Inspired by your shopping trends</h2>
        <div className="multi-feature-card-content">
  <div className="multi-feature-image-grid">
    <img src="https://m.media-amazon.com/images/I/51kw4euqqkL._AC_SY200_.jpg" alt="Product 1" />
    <img src="https://m.media-amazon.com/images/I/81o7Hypi+eL._AC_SY95_.jpg" alt="Product 2" />
    <img src="https://m.media-amazon.com/images/I/81K9vew0zNL._AC_SY95_.jpg" alt="Product 3" />
    <img src="https://m.media-amazon.com/images/I/61hK5i6qh8L._AC_SY95_.jpg" alt="Product 4" />
  </div>
</div>

      </div>
      <div className="multi-feature-banner-card">
        <h2>Keep shopping for</h2>
        <div className="multi-feature-card-content">
          <img src="image5.jpg" alt="Product 5" />
          <img src="image6.jpg" alt="Product 6" />
          <img src="image7.jpg" alt="Product 7" />
          <img src="image8.jpg" alt="Product 8" />
        </div>
      </div>
      <div className="multi-feature-banner-card">
        <h2>Pick up where you left off</h2>
        <div className="multi-feature-card-content">
          <img src="image9.jpg" alt="Product 9" />
          <img src="image10.jpg" alt="Product 10" />
          <img src="image11.jpg" alt="Product 11" />
          <img src="image12.jpg" alt="Product 12" />
        </div>
      </div>
      <div className="multi-feature-banner-card">
        <h2>Prime Day 20th - 21st July | Brands in focus</h2>
        <div className="multi-feature-card-content">
          <img src="image13.jpg" alt="Product 13" />
          <img src="image14.jpg" alt="Product 14" />
          <img src="image15.jpg" alt="Product 15" />
          <img src="image16.jpg" alt="Product 16" />
        </div>
      </div>
    </div>
  );
};

export default MultiFeatureBanner;
