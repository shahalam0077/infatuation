import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "../css/scrollProduct.css";

const ScrollProductBanner: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div className="scroll-product-banner">
      <h2>You might also like</h2>
      <div className="scroll-product-card-content">
        <button className="scroll-button left" onClick={scrollLeft}>
          <ArrowBackIosNewIcon/>
        </button>
        <div className="scroll-product-image-grid" ref={scrollContainerRef}>
          <img
            src="https://m.media-amazon.com/images/I/51kw4euqqkL._AC_SY200_.jpg"
            alt="Product 1"
          />
          <img
            src="https://m.media-amazon.com/images/I/81o7Hypi+eL._AC_SY95_.jpg"
            alt="Product 2"
          />
          <img
            src="https://m.media-amazon.com/images/I/81K9vew0zNL._AC_SY95_.jpg"
            alt="Product 3"
          />
          <img
            src="https://m.media-amazon.com/images/I/61hK5i6qh8L._AC_SY95_.jpg"
            alt="Product 4"
          />
          <img
            src="https://m.media-amazon.com/images/I/51kw4euqqkL._AC_SY200_.jpg"
            alt="Product 5"
          />
          <img
            src="https://m.media-amazon.com/images/I/81o7Hypi+eL._AC_SY95_.jpg"
            alt="Product 6"
          />
          <img
            src="https://m.media-amazon.com/images/I/81K9vew0zNL._AC_SY95_.jpg"
            alt="Product 7"
          />
          <img
            src="https://m.media-amazon.com/images/I/61hK5i6qh8L._AC_SY95_.jpg"
            alt="Product 8"
          />
          <img
            src="https://m.media-amazon.com/images/I/51kw4euqqkL._AC_SY200_.jpg"
            alt="Product 1"
          />
          <img
            src="https://m.media-amazon.com/images/I/81o7Hypi+eL._AC_SY95_.jpg"
            alt="Product 2"
          />
          <img
            src="https://m.media-amazon.com/images/I/81K9vew0zNL._AC_SY95_.jpg"
            alt="Product 3"
          />
          <img
            src="https://m.media-amazon.com/images/I/61hK5i6qh8L._AC_SY95_.jpg"
            alt="Product 4"
          />
          <img
            src="https://m.media-amazon.com/images/I/51kw4euqqkL._AC_SY200_.jpg"
            alt="Product 5"
          />
          <img
            src="https://m.media-amazon.com/images/I/81o7Hypi+eL._AC_SY95_.jpg"
            alt="Product 6"
          />
          <img
            src="https://m.media-amazon.com/images/I/81K9vew0zNL._AC_SY95_.jpg"
            alt="Product 7"
          />
          <img
            src="https://m.media-amazon.com/images/I/61hK5i6qh8L._AC_SY95_.jpg"
            alt="Product 8"
          />
          <Link to={"/store"} style={{ margin: "auto" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/view-more.png"
              alt="Product 8"
            />
          </Link>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
         <ArrowForwardIosIcon/>
        </button>
      </div>
    </div>
  );
};

export default ScrollProductBanner;
