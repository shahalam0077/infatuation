import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Twitter, Instagram, Facebook, YouTube } from "@mui/icons-material";

const FollowUsMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        endIcon={<NavigateNextIcon />}
        color="inherit"
        onMouseOver={handleMenuOpen}
      >
        Follow Us
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        PaperProps={{
          elevation: 4,
          sx: {
            opacity: "1",
            transform: "none",
            transition:
              "opacity 317ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 211ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            top: "152px",
            left: "300px",
            right: "150px",
            transformOrigin: "583.422px 0px",
          },
        }}
      >
        <Box
          sx={{
            background: "transparent",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            bottom: "auto",
            height: "auto",
            minHeight: "0 !important",
            left: "-655.938px",
            overflow: "visible",
            padding: "40px 105px 60px",
            right: "150px",
            width: "600px",
          }}
        >
          <Typography variant="subtitle1">Follow Us</Typography>
          <Divider sx={{marginY:'10px'}} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <MenuItem onClick={handleMenuClose}>
              <div>
                <Twitter sx={{ marginRight: 1 }} />
                Twitter
                <Typography>@YourBrand</Typography>
              </div>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <div>
                <Instagram sx={{ marginRight: 1 }} /> Instagram
                <Typography>@YourBrand</Typography>
              </div>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <div>
                <Facebook sx={{ marginRight: 1 }} /> Facebook
                <Typography>@YourBrand</Typography>
              </div>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <div>
                <YouTube sx={{ marginRight: 1 }} /> YouTube
                <Typography>@YourBrand</Typography>
              </div>
            </MenuItem>
          </div>
        </Box>
      </Menu>
    </>
  );
};

export default FollowUsMenu;
