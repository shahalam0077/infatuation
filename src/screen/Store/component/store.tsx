import { TextField } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../css/store.css";
import ProductList from "../../Product/component/productList";
import PriceSlider from "./priceSlider";
import Categories from "./categories";
import BestSellers from "./bestSellers";

const Store = () => {
  return (
    <main className="store">
      <div className="store-left">
        <div className="store-search-container">
          <TextField
            size="small"
            id="outlined-basic"
            label="Search products..."
            variant="outlined"
          />
          <ArrowForwardIosIcon className="store-search-arrow-icon" />
        </div>
        <PriceSlider />

        <Categories />
        <BestSellers/>
      </div>
      <div className="store-right">
        <ProductList showTitle={false} />
      </div>
    </main>
  );
};

export default Store;
