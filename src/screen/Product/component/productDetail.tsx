// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const id  = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from API or use static data
    const fetchProduct = async () => {
      const response = await fetch(`/path-to-your-api/product/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      {/* <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p> */}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
