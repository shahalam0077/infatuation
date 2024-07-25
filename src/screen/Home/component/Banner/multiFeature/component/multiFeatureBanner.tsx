import React from "react";
import "../css/multiFeature.css";
import image1 from "../../../../../../images/SY93.jpg";
import image2 from "../../../../../../images/SY94.jpg";
import image3 from "../../../../../../images/SY95.jpg";
import image4 from "../../../../../../images/SY96.jpg";
import image5 from "../../../../../../images/SY97.jpg";
import image6 from "../../../../../../images/SY98.jpg";
import image7 from "../../../../../../images/SY99.jpg";
import image8 from "../../../../../../images/SY100.jpg";
import image9 from "../../../../../../images/SY170.jpg";
import image10 from "../../../../../../images/SY175.jpg";
import image11 from "../../../../../../images/SY180.jpg";
import image12 from "../../../../../../images/SY190.jpg";
import image13 from "../../../../../../images/SY200.jpg";
import image14 from "../../../../../../images/CB55.jpg";
import image15 from "../../../../../../images/CB56.jpg";
import image16 from "../../../../../../images/CB57.jpg";
import image17 from "../../../../../../images/CB95.jpg";
import { Link, Typography } from "@mui/material";

const MultiFeatureBanner = () => {
  return (
    <div className="multi-feature-banner">
      <div className="multi-feature-banner-card">
        <h2>Inspired by your shopping trends</h2>
        <div className="multi-feature-card-content">
          <div className="multi-feature-image-grid">
            <img src={image1} alt="Product 1" />
            <img src={image2} alt="Product 2" />
            <img src={image3} alt="Product 3" />
            <img src={image4} alt="Product 4" />
          </div>
        </div>
      </div>
      <div className="multi-feature-banner-card">
        <h2> Customers Most-Loved Fashion for you</h2>
        <div className="multi-feature-card-content">
          <div className="multi-feature-image-grid">
            <img src={image5} alt="Product 1" />
            <img src={image6} alt="Product 2" />
            <img src={image7} alt="Product 3" />
            <img src={image8} alt="Product 4" />
          </div>
        </div>
      </div>
      <div className="multi-feature-banner-card-two">
        
          <div className="multi-feature-card-content">
          <div style={{fontSize:'19px',fontWeight:'700'}}> Customers Most-Loved Fashion for you</div>
            <div className="multi-feature-image-grid">
              <img src={image9} alt="Product 1" />
              <img src={image10} alt="Product 2" />
              <img src={image11} alt="Product 3" />
              <img src={image12} alt="Product 4" />
            </div>
        
        </div>
        <Link  sx={{fontSize:'13px',padding:'10px',marginBottom:'20px',textDecoration:'none',cursor:'pointer'}} >
          See more products to review
        </Link>
      </div>
      <div className="multi-feature-banner-card">
        <h2>Prime Day 20th - 21st July | Brands in focus</h2>
        <div className="multi-feature-card-content">
          <div className="multi-feature-image-grid">
            <div className="image-text-pair">
              <img src={image14} alt="HP Laptop" />
              <p>
                HP Pavilion 15-ef0000 Laptop
                <br /> Up to 35% off
              </p>
            </div>
            <div className="image-text-pair">
              <img src={image15} alt="OnePlus Smartphone" />
              <p>
                OnePlus Smartphones
                <br /> Starting ₹18,999
              </p>
            </div>
            <div className="image-text-pair">
              <img src={image16} alt="Product 3" />
              <p>Your Text for Product 3</p>
            </div>
            <div className="image-text-pair">
              <img src={image17} alt="Product 4" />
              <p>Your Text for Product 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiFeatureBanner;
