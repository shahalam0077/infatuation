// src/components/ProductItem.js
import React from 'react';
import "../css/product.css";

const ProductItem = ({ image, name, category, originalPrice, discountedPrice, isOnSale, rating }:{ image:string, name:string, category:string, originalPrice:number, discountedPrice:number, isOnSale:boolean, rating:string }) => {
    return (
      <div className="product-card">
        <div className="product-image">
          {isOnSale && <span className="sale-badge">Sale!</span>}
          <img src={image} alt={name} />
        </div>
        <div className="product-info">
          <h3>{name}</h3>
          <p className="category">{category}</p>
          <p className="price">
            {originalPrice && <span className="original-price">${originalPrice}</span>}
            <span className="discounted-price">${discountedPrice}</span>
          </p>
          <div className="rating">{rating}</div>
        </div>
      </div>
  );
};

export default ProductItem;
