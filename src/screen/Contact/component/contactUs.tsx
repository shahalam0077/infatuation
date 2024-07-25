import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import blackChair from "../../../images/black-chair.jpeg";
import blackDarbar from "../../../images/black-darbar.jpeg";
import vanHeusen from "../../../images/van-heusen.jpeg";

const issues = [
  {
    id: 1,
    title: "I need details for the delivery person",
    status: "Resolved",
    date: "Jul 07",
    updates: 1,
  },
];

const items = [
  {
    id: 1,
    title:
      "CELLBELL Desire C104 Mid Back Comfortable Fabric, Mesh Office Executive Chair",
    status: "Delivered on Jul 07",
  },
  {
    id: 2,
    title:
      "CELLBELL Desire C104 Mid Back Comfortable Fabric, Mesh Office Executive Chair",
    status: "Order Not Placed",
  },
  {
    id: 3,
    title: "VAN HEUSEN Solid Single Breasted Formal Men Blazer",
    status: "Returned",
  },
];

const orders = [
  {
    id: 1,
    image: blackChair,
    title: "CELLBELL Desire C104 Mid Back Comfortable Chair",
    price: "₹3,598",
    status: "Delivered",
    date: "Sun Jul 07",
    review: true,
  },
  {
    id: 2,
    image: blackChair,
    title: "CELLBELL Desire C104 Mid Back Comfortable Chair",
    price: "₹3,499",
    status: "Order Not Placed",
    paymentIssue: true,
  },
  {
    id: 3,
    image: vanHeusen,
    title: "VAN HEUSEN Solid Single Breasted Formal",
    price: "₹5,599",
    status: "Refund Completed",
  },
  {
    id: 4,
    image: blackDarbar,
    title: "Darbar In Solid Single Breasted Casual",
    price: "₹1,596",
    status: "Refund Completed",
  },
  {
    id: 5,
    image: blackChair,
    title: "CELLBELL Desire C104 Mid Back Comfortable Chair",
    price: "₹3,598",
    status: "Delivered",
    date: "Sun Jul 07",
    review: true,
  },
  {
    id: 6,
    image: blackChair,
    title: "CELLBELL Desire C104 Mid Back Comfortable Chair",
    price: "₹3,499",
    status: "Order Not Placed",
    paymentIssue: true,
  },
  {
    id: 7,
    image: vanHeusen,
    title: "VAN HEUSEN Solid Single Breasted Formal",
    price: "₹5,599",
    status: "Refund Completed",
  },
  {
    id: 8,
    image: blackDarbar,
    title: "Darbar In Solid Single Breasted Casual",
    price: "₹1,596",
    status: "Refund Completed",
  },
];

const helpTopics = [
  "Delivery related",
  "Login and my account",
  "Refunds related",
  "Flipkart Pay Later",
  "Payment",
  "Returns & Pickup related",
  "Cancellation related",
  "Grocery",
  "SuperCoins",
  "Flipkart Plus",
  "Flipkart Travel",
  "2 Wheelers",
  "Others",
  "Personal Loan",
  "Recharges",
  "Flipkart UPI",
  "2 Wheeler Insurance",
  "VIP",
];

const ContactUs = () => {
  return (
    <Container maxWidth="lg" sx={{marginBottom:'20px'}}>
      <Box mt={4} mb={4}>
        <Typography variant="h6" gutterBottom>
          Flipkart Help Center | 24×7 Customer Care Support
        </Typography>
        <Typography variant="caption" gutterBottom>
          The Flipkart Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Flipkart Help Centre also
          lists out more information that you may need regarding Flipkart Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Flipkart Help
          Centre number or even access Flipkart Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 14-Jul-24{" "}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Left Sidebar */}
        <Grid item xs={4}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Type of issues
            </Typography>
            
            <Typography sx={{marginLeft:'20px',marginY:'20px', cursor:'pointer'}} variant="body2" gutterBottom>
              Help with your issues
            </Typography>
            <Typography  sx={{marginLeft:'20px',marginY:'20px', cursor:'pointer'}}variant="body2" gutterBottom>
              Help with your order
            </Typography>
            <Typography sx={{marginLeft:'20px',marginY:'20px', cursor:'pointer'}} variant="body2" gutterBottom>
              Help with other issues
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Help Topics
            </Typography>
            {helpTopics.map((topic: any) => (
              <Typography sx={{marginLeft:'20px',marginY:'20px', cursor:'pointer'}} variant="body2" gutterBottom>
                {topic}
              </Typography>
            ))}
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={8}>
          <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Your issues
            </Typography>
            {issues.map((issue) => (
              <Box key={issue.id} mb={2}>
                <Typography variant="body1">{issue.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {issue.status} | {issue.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {issue.updates} Update{issue.updates > 1 ? "s" : ""} Received
                </Typography>
              </Box>
            ))}
          </Paper>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Which item are you facing an issue with?
            </Typography>
            {/* {items.map((item) => (
              <Box key={item.id} mb={2}>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.status}
                </Typography>
              </Box>
            ))} */}
            <Box width="75%">
              <List>
                {orders.map((order) => (
                  <React.Fragment key={order.id}>
                    <ListItem
                      sx={{
                        backgroundColor: "#fff",
                        paddingX: "25px",
                        paddingY: "15px",
                        width: "100%",
                        marginBottom: "10px",
                        marginY: "10px",
                        borderRadius: "4px",
                        boxShadow: "2px",
                        cursor:'pointer'
                      }}
                      alignItems="flex-start"
                    >
                      <ListItemAvatar>
                        <Avatar
                        sx={{width:'70px',height:'70px',marginRight:'30px'}}
                          variant="square"
                          src={order.image}
                          alt={order.title}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={order.title}
                        secondary={
                          <>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {order.price}
                            </Typography>
                            <br />
                            {order.status === "Delivered" && (
                              <>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="green"
                                >
                                  Delivered on {order.date}
                                </Typography>
                                <br />
                                {order.review && (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="blue"
                                  >
                                    <a href="#">Rate & Review Product</a>
                                  </Typography>
                                )}
                              </>
                            )}
                            {order.status === "Order Not Placed" && (
                              <Typography
                                component="span"
                                variant="body2"
                                color="red"
                              >
                                Payment not successful. Please contact your bank
                                for any money deducted.
                              </Typography>
                            )}
                            {order.status === "Refund Completed" && (
                              <Typography
                                component="span"
                                variant="body2"
                                color="orange"
                              >
                                Refund Completed
                              </Typography>
                            )}
                          </>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
