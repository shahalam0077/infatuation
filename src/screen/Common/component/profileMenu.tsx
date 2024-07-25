import React, { useState } from "react";
import { Popover, MenuItem, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StoreIcon from "@mui/icons-material/Store";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
    
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigateToOTPLogin = () => {
    handleMenuClose();
    navigate("/otp-login");
  };

  const handleNavigateToMyProfile = () => {
    handleMenuClose();
    navigate("/my-profile");
  };

  const handleNavigateToMyOrder = () => {
    handleMenuClose();
    navigate("/my-order");
  };

  return (
    <a onMouseEnter={handleMenuOpen}>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onMouseEnter={handleMenuOpen}
        color="inherit"
      >
        <AccountCircle
          style={{
            alignSelf: "center",
            padding: "5px",
            marginTop: "5px",
          }}
          onMouseLeave={handleMenuClose}
        />
      </IconButton>

      <Popover
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          onMouseLeave: handleMenuClose,
        }}
      >
        <MenuItem onClick={handleNavigateToMyProfile}>
          <AccountCircle style={{ marginRight: 10 }} />
          My Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LocalOfferIcon style={{ marginRight: 10 }} />
          SuperCoin Zone
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <StoreIcon style={{ marginRight: 10 }} />
          Flipkart Plus Zone
        </MenuItem>
        <MenuItem onClick={handleNavigateToMyOrder}>
          <ListAltIcon style={{ marginRight: 10 }} />
          Orders
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <FavoriteIcon style={{ marginRight: 10 }} />
          Wishlist
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LocalOfferIcon style={{ marginRight: 10 }} />
          Coupons
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <CardGiftcardIcon style={{ marginRight: 10 }} />
          Gift Cards
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NotificationsIcon style={{ marginRight: 10 }} />
          Notifications
        </MenuItem>
        <MenuItem onClick={handleNavigateToOTPLogin}>
          <PowerSettingsNewIcon style={{ marginRight: 10 }} />
          Logout
        </MenuItem>
      </Popover>
    </a>
  );
};

export default ProfileMenu;
