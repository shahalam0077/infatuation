import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Checkbox,
  FormControlLabel,
  Divider,
  Input,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import blackChair from "../../../images/black-chair.jpeg";
import blackDarbar from "../../../images/black-darbar.jpeg";
import vanHeusen from "../../../images/van-heusen.jpeg";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles({
  label: {
    fontSize: "12px",
    fontWeight: "500",
  },
});

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

const MyOrder: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", width: "100%", backgroundColor: "#E5E7E9" }}>
      <Container>
        <Box display="flex" width="100%" flexDirection="column" gap={2}>
          <Typography marginTop={"20px"} variant="h4">
            My Orders
          </Typography>

          <Input
            style={{
              width: "95%",
              border: " 2px solid #1976d2",
              borderBottom: "none",
              borderRadius: "2px",
              padding: "5px",
            }}
            placeholder="Search your orders here"
            //   id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="start">
                <SearchIcon
                  style={{
                    backgroundColor: "#95A5A6",
                    color: "#fff",
                    paddingBlock: "9px",
                    paddingInline: "25px",
                  }}
                />
              </InputAdornment>
            }
          />
          <Box display="flex" width="95%" gap={2}>
            <Box
              sx={{
                backgroundColor: "#fff",
                maxHeight: "540px",
                borderRadius: "5px",
                padding: "10px",
                boxShadow: "2px",
              }}
              width="25%"
            >
              <Typography variant="h6">Filters</Typography>
              <Divider sx={{ marginY: "10px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                  variant="subtitle1"
                >
                  ORDER STATUS
                </Typography>
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="On the way"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="Delivered"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="Cancelled"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="Returned"
                />
              </Box>
              <Divider sx={{ marginY: "10px" }} />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                  }}
                  variant="subtitle1"
                >
                  ORDER TIME
                </Typography>
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="Last 30 days"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="2023"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="2022"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="2021"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="2020"
                />
                <FormControlLabel
                  classes={{ label: classes.label }}
                  control={<Checkbox />}
                  label="Older"
                />
              </Box>
            </Box>
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
                      }}
                      alignItems="flex-start"
                    >
                      <ListItemAvatar>
                        <Avatar
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
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default MyOrder;
