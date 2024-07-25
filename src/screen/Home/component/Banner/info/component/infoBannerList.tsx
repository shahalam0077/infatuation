import React from 'react'
import InfoBannerItem from './infoBannerItem';

import infoGlobe from "../../../../../../images/info-globe.png";
import infoLock from "../../../../../../images/info-lock.png";
import infoQuality from "../../../../../../images/info-quality.png";
import infoTag from "../../../../../../images/info-tag.png";

import '../css/banner.css'; // Import the CSS file for styling

const InfoBannerList = () => {
    return (
      <div className="info-banner-list">
        <InfoBannerItem
          imageUrl={infoGlobe}
          title="Worldwide Shipping"
          description="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <InfoBannerItem
          imageUrl={infoQuality}
          title="Best Quality"
          description="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <InfoBannerItem
          imageUrl={infoTag}
          title="Best Offers"
          description="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <InfoBannerItem
          imageUrl={infoLock}
          title="Secure Payments"
          description="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
      </div>
    );
  };
  

export default InfoBannerList