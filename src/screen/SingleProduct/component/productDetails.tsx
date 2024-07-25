import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/system";

const DiscountText = styled("span")(({ theme }) => ({
  color: "#ff5722",
  marginLeft: theme.spacing(1),
}));

const OriginalPrice = styled("span")(({ theme }) => ({
  textDecoration: "line-through",
  color: "blue",
  marginLeft: theme.spacing(1),
}));

const OfferList = styled(List)(({ theme }) => ({
  marginLeft: theme.spacing(-2),
}));

const OfferListItem = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  listStyleType: "disc",
  paddingLeft: theme.spacing(2),
}));

const ProductDetails = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box bgcolor={"#fff"} p={5} sx={{overlay:'none'}}>
      <Typography variant="h6" gutterBottom>
        CELLBELL Desire C104 Mid Back Comfortable Fabric, Mesh Office Executive
        Chair
      </Typography>
      <Box display="flex" alignItems="center">
        <Rating value={4.1} readOnly precision={0.1} />
        <Typography variant="body2" ml={1}>
          10,977 Ratings & 4,310 Reviews
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" color="primary">
          ₹3,598
        </Typography>
        <OriginalPrice>₹9,999</OriginalPrice>
        <DiscountText>64% off</DiscountText>
      </Box>
      <Box mb={2} mt={3}>
        <Typography variant="subtitle1">Available Offers</Typography>
        <OfferList>
          <OfferListItem>
          <Typography variant="body2">"Special Price Get extra ₹636 off (price inclusive of cashback/coupon)"
         </Typography></OfferListItem>
          <OfferListItem>
            <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Cardless EMI Txns on a Net Cart Value of ₹50,000 and above" />
          </OfferListItem>
          <OfferListItem>
            <ListItemText primary="Bank Offer Extra ₹1,000 off on HDFC Bank Cardless EMI Txns on a Net Cart Value of ₹75,000 and above" />
          </OfferListItem>
          <Button variant="text" color="primary" onClick={handleClickOpen}>
            View 16 more offers
          </Button>
        </OfferList>
      </Box>
      {/* <Box display="flex" mb={2}>
        <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
          Add to Cart
        </Button>
        <Button variant="contained" color="secondary">
          Buy Now
        </Button>
      </Box> */}
      <Box>
        <Typography variant="h6">Delivery</Typography>
        <Typography variant="body2">
          Delivery by 24 Jul, Wednesday | Free
        </Typography>
        <Typography variant="body2">
          Installation & Demo by 25 Jul, Thursday | ₹325
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Available Offers</DialogTitle>
        <DialogContent>
          <OfferList>
          <Typography variant="body2">"Special Price Get extra ₹636 off (price inclusive of cashback/coupon)
          </Typography>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Cardless EMI Txns on a Net Cart Value of ₹50,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹1,000 off on HDFC Bank Cardless EMI Txns on a Net Cart Value of ₹75,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Partner Offer Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000* Know More" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on Axis Bank Credit Card Txns on a Net Cart Value of ₹25,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on Axis Bank Card Txns on a Net Cart Value of ₹50,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹1000 off on Axis Bank Credit Card Txns on a Net Cart Value of ₹75,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Credit Card EMI Txns on a Net Cart Value of ₹25,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Credit Card EMI Txns on a Net Cart Value of ₹50,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹1,000 off on HDFC Bank Credit Card EMI Txns on a Net Cart Value of ₹75,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on IDFC FIRST Bank Credit Card Txns on a Net Cart Value of ₹25,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on IDFC FIRST Bank Credit Card Txns on a Net Cart Value of ₹50,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹1000 off on IDFC FIRST Bank Credit Card Txns on a Net Cart Value of ₹75,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Debit Card EMI Txns on a Net Cart Value of ₹25,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹500 off on HDFC Bank Debit Card EMI Txns on a Net Cart Value of ₹50,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer Extra ₹1,000 off on HDFC Bank Debit Card EMI Txns on a Net Cart Value of ₹75,000 and above" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="Bank Offer 5% Cashback on Flipkart Axis Bank Card" />
            </OfferListItem>
            <OfferListItem>
              <ListItemText primary="EMI starting from ₹127/month View Plans" />
            </OfferListItem>
          </OfferList>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProductDetails;
