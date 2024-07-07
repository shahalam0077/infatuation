import React from 'react';
import '../css/card.css'; // Import the CSS file for styling

const Card = ({ image, title, description, buttonText }:{image:any, title:any, description:any, buttonText:any}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
