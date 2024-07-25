import React from "react";
import "../css/promoBanner.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const PromoBanner = ({
  backgroundImage,
  heading,
  subheading,
  description,
  promoText,
  buttonText,
  link,
}: {
  backgroundImage: string;
  heading: string;
  subheading: string;
  description: string;
  promoText: string;
  buttonText: string;
  link: string;
}) => {
  return (
    <div
      className="promo-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <div className="promo-banner-heading">{heading}</div>
        <div className="promo-banner-subheading">{subheading}</div>
        <div className="promo-banner-description">{description}</div>
        <div className="promo-banner-promoText">{promoText}</div>
        <div className="button-con" >
          <Button
            className="shop-now"
            color="info"
            variant="contained"
            size="large"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
