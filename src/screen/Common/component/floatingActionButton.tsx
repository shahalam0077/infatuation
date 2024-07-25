import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import Chatbot from "./chatBot"; // Import your Chatbot component

const actions = [
  { icon: <WhatsAppIcon color="secondary" />, name: "WhatsApp" },
  { icon: <CallIcon />, name: "Call" }
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const [openChat, setOpenChat] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChatOpen = () => {
    setOpenChat(true);
    setOpen(false); // Close the SpeedDial when opening chat
  };

  const handleChatClose = () => setOpenChat(false);

  const handleWhatsAppAction = () => {
    // Implement your logic for WhatsApp action here
    // For example, open a new tab with a WhatsApp message link
    window.open(
      "https://api.whatsapp.com/send?phone=8617288044&text=Hello",
      "_blank"
    );
    handleClose(); // Close the SpeedDial after action
  };

  const handleCallAction = () => {
    // Implement your logic for Call action here
    // For example, initiate a phone call using a tel: link
    window.open("tel:+8013912388");
    handleClose(); // Close the SpeedDial after action
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        zIndex: 1000,
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <Backdrop open={open || openChat} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 0, right: 0 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              if (action.name === "WhatsApp") {
                handleWhatsAppAction();
              } else if (action.name === "Call") {
                handleCallAction();
              } else {
                handleClose();
              }
            }}
          />
        ))}
        <SpeedDialAction
          icon={<ChatIcon />}
          tooltipTitle="Chat"
          onClick={handleChatOpen}
        />
      </SpeedDial>

      <Chatbot open={openChat} onClose={handleChatClose} />
    </Box>
  );
}
