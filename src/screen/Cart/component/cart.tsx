// src/components/Cart.js
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import accessory1 from "../../../images/product-accessory1.jpg";
import accessory2 from "../../../images/product-accessory2.jpg";
import productBag1 from "../../../images/product-bag1.jpg";

const items = [
  {
    id: 1,
    name: "Anchor Bracelet - Brown",
    price: 170.0,
    image: accessory2,
  },
  {
    id: 2,
    name: "Boho Bangle Bracelet - Aqua",
    price: 150.0,
    image: accessory1,
  },
  {
    id: 3,
    name: "Light Brown Purse",
    price: 150.0,
    image: productBag1,
  },
];
interface CartProps {
  toggleDrawer: (newOpen: boolean) => () => void;
}

const Cart: React.FC<CartProps> = ({ toggleDrawer }) => {
  // Add functionality to add/remove items from the cart
  const handleRemoveItem = (id: number) => {
    // Handle item removal logic here
    console.log(`Remove item with id: ${id}`);
  };
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <Box sx={{ width: 350, padding: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {items.map((item) => (
            <ListItem key={item.id} sx={{ paddingLeft: 0, paddingRight: 0 }}>
              <ListItemAvatar>
                <Avatar src={item.image} variant="square" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`1 × $${item.price.toFixed(2)}`}
              />
              <IconButton
                edge="end"
                aria-label="remove"
                onClick={() => handleRemoveItem(item.id)}
              >
                <HighlightOffIcon/>
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ width: "inherit", bottom: "10px", position: "fixed" }}>
          <Divider />
          {/* <div style={{ display: "flex", bottom: 0, position: "absolute" }}> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 0",
            }}
          >
            <Typography variant="subtitle1">Subtotal:</Typography>
            <Typography variant="subtitle1">
              ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            VIEW CART
          </Button>
          <Button variant="contained" color="secondary" fullWidth>
            CHECKOUT
          </Button>
        </Box>
        {/* </div> */}
      </Box>
    </div>
  );
};

export default Cart;
