// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import logo from "../../../images/dnk-logo-white.png";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../../../css/styles.css";
import "../../../css/header.css";
import "../../../css/cart.css";
import { Badge, IconButton, MenuItem } from "@mui/material";
import DropDown from "./dropDown";
import { CartDrawer } from "./cartDrawer";
import SearchBar from "./searchBar";
import CustomizedMenus from "../../Common/component/menu";

const Header = () => {
  return (
    <header className="header">
      <div className="headerLeft">
        <Link style={{ alignContent: "center" }} to={"/"}>
          <img src={logo} className="dnk-logo" alt="logo" />
        </Link>
        {/* <div> */}
        <Link className="text medium" to="/store">
          HOME
        </Link>

        <Link className="text medium" to="/products">
          PRODUCTS
        </Link>
        {/* <CustomizedMenus/> */}
        {/* <DropDown/> */}

        {/* <Link className="text medium" to="/cart">
          CART
        </Link> */}
        <Link className="text medium" to="/products">
          ACCESSORIES
        </Link>
        {/* </div> */}
      </div>

      <div className="headerRight">
        {/* <Search /> */}
        <SearchBar/>
        <Link className="text medium" to="/about">
          ABOUT
        </Link>
        <Link className="text medium" to="/contact">
          CONTACT US
        </Link>
        <CartDrawer/>
        {/* <Link className="text medium" to="/cart"><ShoppingCartIcon fontSize="medium" /><div className="cart-count" >0</div></Link>  */}
       <Link className="text medium" to="/myAccount"><PersonIcon fontSize="medium" /></Link> 
      </div>

    </header>
  );
};

export default Header;
