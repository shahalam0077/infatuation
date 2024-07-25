import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import blackChair from "../../../images/black-chair.jpeg";
import syntheticBlackChair from "../../../images/synthetic-rubber-chair.jpeg";
import chairDls1 from "../../../images/chair-dls1.jpeg";
import chairDls2 from "../../../images/chair-dls2.jpeg";
import chairDls3 from "../../../images/chair-dls3.jpeg";
import chairDls4 from "../../../images/chair-dls4.jpeg";
import chairDls5 from "../../../images/chair-dls5.jpeg";
import qvImage from "../../../images/QV-image.jpg";

import smallBlackChair from "../../../images/small-black-chair.jpeg";
import smallBlueChair from "../../../images/small-blue-chair.jpeg";
import smallGreenChair from "../../../images/small-green-chair.jpeg";
import smallGreyChair from "../../../images/small-grey-chair.jpeg";
import smallOrangeChair from "../../../images/small-orange-chair.jpeg";
import smallRedChair from "../../../images/small-red-chair.jpeg";
import vanHeusen from "../../../images/van-heusen.jpeg";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactImageMagnify from "react-image-magnify";
import ProductDetails from "./productDetails";
import ProductCard from "./deliveryDetails";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const chairDetailsImages = [
  syntheticBlackChair,
  chairDls1,
  chairDls2,
  chairDls3,
  chairDls4,
  chairDls5,
];

const chairColorsImages = [
  blackChair,
  smallBlueChair,
  smallGreenChair,
  smallGreyChair,
  smallOrangeChair,
  smallRedChair,
];

const ProductPage = () => {
  const [isCartAdded, setIsCartAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(syntheticBlackChair);

  return (
    <Box sx={{ flexGrow: 1, marginInline: "50px" }}>
      <Grid container spacing={2} mt={1} mb={1}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            maxHeight: "650px",
          }}
          item
          xs={12}
          sm={6}
        >
          <div
            style={{
              width: "90px",
              height: "100px",
              //   backgroundColor: "yellow",
            }}
          >
            {chairDetailsImages.map((image, index) => (
              <Item
                onClick={() => setSelectedImage(image)}
                key={index}
                sx={{ mb: "10px", cursor: "pointer" }}
              >
                <img
                  src={image}
                  alt={`chair-${index}`}
                  style={{ width: "80%", height: "60px" }}
                />
              </Item>
            ))}
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "80%",
              pb: "10px",
              //   marginRight: "20px",
            }}
          >
            <Box sx={{ width: "100%", height: "80%", position: "relative" }}>
              {/* <img
                src={selectedImage}
                alt="chair"
                style={{ width: "100%", height: "auto" }}
              /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "chair",
                    isFluidWidth: true,
                    src: selectedImage,
                    overlay: "auto",
                  },
                  largeImage: {
                    src: selectedImage,
                    width: 1200,
                    height: 1500,
                    backgroundColor: "rgba(0,0,0,1)",
                    overlay: "none",
                  },
                  lensStyle: { backgroundColor: "rgba(0,0,0,.2)" },
                  enlargedImageContainerDimensions: {
                    width: "120%",
                    height: "100%",
                  },
                  isHintEnabled: true,
                }}
              />
            </Box>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // backgroundColor:'green'
              }}
            >
              <Button
                startIcon={<ShoppingCartIcon />}
                sx={{
                  backgroundColor: "#FF9F00",
                  paddingBlock: "15px",
                  alignItems: "center",
                }}
                variant="contained"
                fullWidth
                disabled={isCartAdded}
              >
                {isCartAdded ? "Added to Cart" : "Add to Cart"}
              </Button>
              <Button
                startIcon={<FlashOnIcon />}
                sx={{
                  backgroundColor: "#FB641B",
                  paddingBlock: "15px",
                  alignItems: "center",
                  ml: 5,
                }}
                variant="contained"
                fullWidth
              >
                Buy Now
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid sx={{ backgroundColor: "#fff" }} xs={12} sm={6}>
          <ProductDetails />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#fff",
              alignItems: "center",
              paddingInline: "40px",
            }}
          >
            <img
              src={qvImage}
              alt={`qvImage`}
              style={{ width: "10%", height: "auto" }}
            />

            <div>
              <Typography variant="body1">Flipkart Quality Verified</Typography>
              <Typography variant="caption">
                Passed 30+ quality checks performed by experts for Comfort,
                Durability & Design.
                <Link color={"blue"} to={""}>
                  Know More
                </Link>
              </Typography>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingInline: "40px",
            }}
          >
            <div>
              <Typography variant="h6">Delivery</Typography>
            </div>
            <div>
              <TextField size="small"></TextField>
            </div>
            <div style={{ width: "25%" }}>
              <img
                src={qvImage}
                alt={`qvImage`}
                style={{ width: "60%", height: "auto" }}
              />
            </div>
          </Box>
          <Grid container spacing={2} mt={1} mb={1}>
            <Grid item xs={12}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  paddingInline={"25px"}
                  variant="subtitle1"
                  gutterBottom
                >
                  Color
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {chairColorsImages.map((image, index) => (
                    <Grid key={index}>
                      <img
                        src={image}
                        alt={`chair-${index}`}
                        style={{
                          width: "60%",
                          height: "auto",
                          border: "3px solid grey",
                          borderRadius: "2px",
                        }}
                      />
                    </Grid>
                  ))}
                </Box>
              </Item>
            </Grid>
            <ProductCard />
          </Grid>
        </Grid>
      </Grid>
    
    </Box>
  );
};

export default ProductPage;
