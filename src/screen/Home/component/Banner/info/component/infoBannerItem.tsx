import React from 'react';
import '../css/banner.css'; // Import the CSS file for styling

const InfoBannerItem = ({ imageUrl, title, description }:{ imageUrl:string, title:string, description:string }) => {
    return (
      <div className="info-item">
      <img src={imageUrl} alt={title} className="info-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    );
  };

export default InfoBannerItem;