import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Avatar,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import profilePic from "../../../images/profile-pic.jpeg";

const MyProfile = () => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      {loading ? (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid item xs={12} sm={3}>
            <Box
              style={{
                padding: "20px",
                backgroundColor: "#f4f4f4",
                borderRadius: "8px",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="20px"
              >
                {/* <PersonIcon style={{ fontSize: 80, color: '#2874f0' }} /> */}
                <Avatar
                  style={{ width: "100px", height: "100px" }}
                  variant="circular"
                  src={profilePic}
                />
                <Typography variant="h6">Hello, Flipkart Customer</Typography>
              </Box>
              <Divider />
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => navigate("/my-order")}
                    primary="My Orders"
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <PaymentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payments" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <LocalOfferIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Stuff" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Content Area */}
          <Grid item xs={12} sm={9}>
            <Box
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Personal Information{" "}
                <a href="#" style={{ fontSize: "0.8rem" }}>
                  Edit
                </a>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    value="Flipkart"
                    variant="outlined"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    value="Customer"
                    variant="outlined"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Your Gender</Typography>
                  <RadioGroup row value="male">
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" style={{ marginBottom: "8px" }}>
                    Email Address{" "}
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      Edit
                    </a>
                  </Typography>
                  <TextField
                    value="shahalamgain0077@gmail.com"
                    variant="outlined"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" style={{ marginBottom: "8px" }}>
                    Mobile Number{" "}
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      Edit
                    </a>
                  </Typography>
                  <TextField
                    value="+918617288044"
                    variant="outlined"
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>
              <Box marginTop="20px">
                <Typography variant="h6">FAQs</Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>
                  <b>
                    What happens when I update my email address (or mobile
                    number)?
                  </b>
                  <br />
                  Your login email id (or mobile number) changes, likewise.
                  You'll receive all your account related communication on your
                  updated email address (or mobile number).
                </Typography>
                <Typography variant="body2" style={{ marginTop: "10px" }}>
                  <b>
                    When will my Flipkart account be updated with the new email
                    address (or mobile number)?
                  </b>
                  <br />
                  When you update your email address (or mobile number), you
                  will receive a confirmation email (or SMS) on your updated
                  email address (or mobile number).
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default MyProfile;
