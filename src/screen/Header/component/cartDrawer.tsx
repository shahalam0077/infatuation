import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Badge, IconButton, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../../Cart/component/cart";

export const CartDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon onClick={toggleDrawer(true)} />
          </Badge>
        </IconButton>
      </MenuItem>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Cart toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};
