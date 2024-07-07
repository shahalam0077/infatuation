// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Products } from "../../../DataBase/dummyData";
import ProductItem from "./productItem";
import "../css/product.css";
import sportShoe1 from "../../../images/sports-shoe1.jpg";
import sportShoe2 from "../../../images/sports-shoe2.jpg";
import menJeans1 from "../../../images/product-m-jeans1.jpg";
import womenJeans1 from "../../../images/product-w-jeans1.jpg";
import womenJeans2 from "../../../images/product-w-jeans2.jpg";
import womenJeans4 from "../../../images/product-w-jeans4.jpg";
import accessory1 from "../../../images/product-accessory1.jpg";
import accessory2 from "../../../images/product-accessory2.jpg";
import productBag1 from "../../../images/product-bag1.jpg";
import productBag3 from "../../../images/product-bag3.jpg";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Divider } from "@mui/material";

const cardData = [
  {
    image: sportShoe1,
    name: "DNK Yellow Shoes",
    category: "Men",
    originalPrice: 150,
    discountedPrice: 120,
    isOnSale: true,
    rating: "★★★★★",
  },
  {
    image: sportShoe2,
    name: "DNK Blue Shoes",
    category: "Men",
    originalPrice: 240,
    discountedPrice: 240,
    isOnSale: false,
    rating: "★★★★★",
  },
  {
    image: menJeans1,
    name: "Dark Brown Jeans",
    category: "Men",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★☆",
  },
  {
    image: womenJeans1,
    name: "Blue Denim Jeans",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★★",
  },
  {
    image: womenJeans2,
    name: "Basic Gray Jeans",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★☆",
  },
  {
    image: womenJeans4,
    name: "Blue Denim Shorts",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 120,
    isOnSale: true,
    rating: "★★★★★",
  },
  {
    image: accessory1,
    name: "Anchor Bracelet",
    category: "Women",
    originalPrice: 240,
    discountedPrice: 240,
    isOnSale: false,
    rating: "★★★★★",
  },
  {
    image: accessory2,
    name: "Boho Bangle Bracelet",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★☆",
  },
  {
    image: productBag1,
    name: "Light Brown Purse",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★★",
  },
  {
    image: productBag3,
    name: "Bright Red Bag",
    category: "Women",
    originalPrice: 150,
    discountedPrice: 150,
    isOnSale: false,
    rating: "★★★★☆",
  },
];

const ProductList = ({ showTitle }: { showTitle: boolean }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  const itemsPerPage = 6;
  const [products, setProducts] = useState(cardData);
  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    setLoading(false);
  }, [page]);

  return (
    <div className="product-list">
      {showTitle && <div className="product-list-title">Featured Products</div>}
      <Divider sx={{ width: '50%', borderColor: 'primary.main', borderWidth: 2 ,marginX:'25%',marginTop:2 }} />
      <div className="product-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          paginatedProducts.map((data, index) => (
            <ProductItem
              key={index}
              image={data.image}
              name={data.name}
              category={data.category}
              originalPrice={data.originalPrice}
              discountedPrice={data.discountedPrice}
              isOnSale={data.isOnSale}
              rating={data.rating}
            />
          ))
        )}
      </div>
      <div className="pagination-container">
        <Pagination
          sx={{
            right: "10px",
            bottom: "10px",
            paddingX: "10px",
            paddingY: "10px",
          }}
          page={page}
          count={Math.ceil(products.length / itemsPerPage)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/store?page=${item.page}`}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ProductList;
