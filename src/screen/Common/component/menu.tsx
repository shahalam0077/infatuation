import React, { useState } from "react";
import { Button, Menu, MenuProps, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import ToysIcon from "@mui/icons-material/Toys";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import WeekendIcon from "@mui/icons-material/Weekend";
import DiamondIcon from "@mui/icons-material/Diamond";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PetsIcon from "@mui/icons-material/Pets";
import GrassIcon from "@mui/icons-material/Grass";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Checkroom } from "@mui/icons-material";
import MenuItems from "./menuItem";
import "../css/menu.css";

const StyledMenu = styled((props: MenuProps) => (
  <Menu elevation={0} {...props} />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255 255 255 / 10%) 0px 2px 10px 0px, rgb(255 255 255 / 10%) 0px 1px 1px 0px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: theme.palette.action.selectedOpacity,
      },
    },
  },
}));

const categories = [
  { name: "All", icon: FormatAlignJustifyIcon },
  { name: "Clothing", icon: Checkroom },
  { name: "Electronics", icon: DevicesIcon },
  { name: "Home Appliances", icon: HomeIcon },
  { name: "Books", icon: BookIcon },
  { name: "Toys", icon: ToysIcon },
  { name: "Sports", icon: SportsSoccerIcon },
  { name: "Beauty & Health", icon: HealthAndSafetyIcon },
  { name: "Groceries", icon: LocalGroceryStoreIcon },
  { name: "Furniture", icon: WeekendIcon },
  { name: "Jewelry", icon: DiamondIcon },
  { name: "Automotive", icon: DirectionsCarIcon },
  { name: "Pet Supplies", icon: PetsIcon },
  { name: "Garden & Outdoors", icon: GrassIcon },
  { name: "Office Supplies", icon: BusinessCenterIcon },
  { name: "Music Instruments", icon: MusicNoteIcon },
  { name: "Baby Products", icon: ChildCareIcon },
  { name: "More", icon: MoreHorizIcon },
];

const MyComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    handleClose();
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedCategory}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItems
          handleClose={handleClose}
          onSelect={handleSelect}
          categories={categories}
        />
      </StyledMenu>
    </>
  );
};

export default MyComponent;
