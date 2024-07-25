import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={0}
        style={{
          height: "70vh",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "2px",
        }}
      >
        <Grid
          item
          xs={10}
          sm={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#2874f0",
            padding: "20px",
            color: "white",
            height: "95%",
            width: "15%",
          }}
        >
          <>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Get access to your Orders, Wishlist and Recommendations
            </Typography>
          </>
          <Box mt={5}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" // replace with actual image URL
              alt="Illustration"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            height: "95%",
            paddingInline: "40px",
            alignSelf: "flex-start",
            paddingTop: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px",
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom>
              Enter Email/Mobile number
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Email/Mobile number"
              margin="normal"
            />
            <Typography
              variant="body2"
              style={{
                marginTop: "10px",
                color: "#878787",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              By continuing, you agree to Flipkart's{" "}
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px", backgroundColor: "#ff5722" }}
            >
              Request OTP
            </Button>
          </Box>
          <Typography variant="body2" style={{ marginTop: "20px" }}>
            New to Flipkart? <a href="#">Create an account</a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
