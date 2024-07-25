import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Link,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Badge,
  Avatar,
  Tooltip,
  Menu,
  Collapse,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import FollowUsMenu from "../../Common/component/followUs";
import LanguageSelector from "../../Common/component/languageSelector";

const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.bigcommerce.com/stores/[store_hash]/v3/wishlists');
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': 'xxxxxxxxxxxxxxxxx', // Replace with your actual token
        },
      };
  
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        const data = JSON.parse(json.contents); // allorigins wraps the response in a contents property
        console.log("Fetched Data:", data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Amazon
                </Typography>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  color="inherit"
                  aria-label="Who We Are"
                  onMouseOver={handleMenuOpen}
                >
                  Who We Are
                </Button>
                <Menu
                  id="who-we-are-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Our History</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Our Team</MenuItem>
                </Menu>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  color="inherit"
                  aria-label="What We Do"
                >
                  What We Do
                </Button>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  color="inherit"
                  aria-label="Our Workplace"
                >
                  Our Workplace
                </Button>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  color="inherit"
                  aria-label="Our Impact"
                >
                  Our Impact
                </Button>
                <Button
                  endIcon={<ExpandMoreIcon />}
                  color="inherit"
                  aria-label="Our Planet"
                >
                  Our Planet
                </Button>
                {/* <Button endIcon={<NavigateNextIcon/>} color="inherit" aria-label="Follow Us">
          Follow Us
        </Button> */}
                <FollowUsMenu />
                <Button color="inherit" aria-label="Subscribe">
                  Subscribe
                </Button>
                <LanguageSelector/>
                {/* <FormControl sx={{ mr: 1, minWidth: 120 }}>
                  <InputLabel
                    sx={{
                      color: "#fff",
                      "&.Mui-focused": {
                        color: "#fff",
                      },
                    }}
                    id="demo-simple-select-label"
                  >
                    Language
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLanguage}
                    label="Language"
                    onChange={handleChange}
                    sx={{
                      color: "#fff", // Change the color of the selected value
                      ".MuiSelect-icon": { color: "#fff" }, // Change the color of the dropdown arrow
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      }, // Change the border color
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      }, // Change the border color when focused
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      }, // Change the border color when hovered
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: "#333", // Change the background color of the dropdown menu
                          "& .MuiMenuItem-root": {
                            color: "#fff", // Change the color of the menu items
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="hi">Hindi</MenuItem>
                  </Select>
                </FormControl> */}
              </Toolbar>
            </AppBar>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ mt: 3, paddingBottom: "20px" }}>
        <Typography
          style={{ backgroundColor: "#F1F6F6", padding: "20px 10px" }}
          variant="h6"
          gutterBottom
        >
          Trending: 5 ways to support 'Made in India' SMBs this Prime Day
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2, bgcolor: "#f7f7f7" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  NEWSFEED
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Amazon delivers the largest selection of products to Prime members in India, same day or faster"
                      secondary="4 July 2024"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="AWS India's first-ever space accelerator to support 24 startups"
                      secondary="4 July 2024"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Crunchyroll is now on Prime Video Channels in India"
                      secondary="25 June 2024"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Amazon's ongoing efforts to help employees, associates and delivery drivers beat the heat this summer"
                      secondary="18 June 2024"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary="Amazon Propel will make 50 startups ready for global markets"
                      secondary="14 May 2024"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://assets.aboutamazon.com/dims4/default/1e0898f/2147483647/strip/true/crop/3300x1856+0+0/resize/1376x774!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fa1%2F2c%2F783739b84527b35c250bfd954a5d%2Famazon-solar-farm-india-rajasthan-bhadla-sust-re.jpeg"
                alt="Couple shopping online"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  9 in 10 urban Indians prefer digital payments for online
                  purchases, 50% favour cashless for offline orders too
                </Typography>
                <Typography variant="body2">
                  A comprehensive Kearney-Amazon Pay study shows customers and
                  merchants choose online payments for increased convenience,
                  greater trust, improved safety, and their transaction tracking
                  abilities.
                </Typography>
                {/* <Button
                  onClick={() => setOpen(!open)}
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Read more
                </Button> */}

                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Typography variant="body2" id="example-collapse-text" mt={2}>
                    In 2019, we set a goal to match all of the electricity
                    consumed across Amazon’s global operations – including our
                    data centers, corporate buildings, grocery stores and
                    fulfillment centers – with 100% renewable energy by 2030.
                    Today, we’re proud to share that we’ve met that goal seven
                    years ahead of schedule. To get there, we’ve become the
                    largest corporate purchaser of renewable energy in the world
                    for four years running, according to Bloomberg NEF, and have
                    invested billions of dollars in more than 500 solar and wind
                    projects globally.
                  </Typography>
                </Collapse>

                <Button
                  onClick={() => setOpen(!open)}
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  {open ? "Show Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Typography variant="h6" gutterBottom>
              TOP STORIES
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://picsum.photos/id/238/300/200"
                    alt="Explained: What is Amazon Prime Day"
                  />
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Explained: What is Amazon Prime Day
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://picsum.photos/id/239/300/200"
                    alt="Amazon Prime Day is back in India on July 20 and 21"
                  />
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Amazon Prime Day is back in India on July 20 and 21
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://picsum.photos/id/240/300/200"
                    alt="'Mirzapur' Season 3 review: more madness, more mayhem"
                  />
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      'Mirzapur' Season 3 review: more madness, more mayhem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://picsum.photos/id/241/300/200"
                    alt="11 must-watch movies and shows on Prime Video this July"
                  />
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      11 must-watch movies and shows on Prime Video this July
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
              Read more
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
