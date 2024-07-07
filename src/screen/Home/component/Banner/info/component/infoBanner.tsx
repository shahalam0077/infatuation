import React from 'react'
import InfoBannerList from './infoBannerList';
import '../css/banner.css'; // Import the CSS file for styling

const InfoBanner = () => {
    return (
      <div className="info-banner">
        <InfoBannerList />
      </div>
    );
  };

export default InfoBanner