import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';

function ProductCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Box sx={{ width: 100, height: 100, backgroundColor: 'gray' }} />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6" gutterBottom>
          Bank Offer Extra ₹1,000 off on HDFC Bank Cardless EMI Txns on a Net Cart value of ₹75,000 and above
        </Typography>
        <Typography variant="body1" gutterBottom>
          View 16 more offers
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" gutterBottom>
            QUALITY VERIFIED
          </Typography>
          <Typography variant="body1" gutterBottom>
            Flipkart Quality Verified
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Passed 30+ quality checks performed by experts for Comfort, Durability & Design.
        </Typography>
        <Button variant="contained" color="primary">
          Know More
        </Button>
        <Typography variant="h6" gutterBottom>
          Delivery
        </Typography>
        <Typography variant="body1" gutterBottom>
          700015
        </Typography>
        <Typography variant="body1" gutterBottom>
          Change
        </Typography>
        <Typography variant="body1" gutterBottom>
          Delivery by 24 Jul, Wednesday
        </Typography>
        <Typography variant="body1" gutterBottom>
          Free
        </Typography>
        <Typography variant="body1" gutterBottom>
          Installation & Demo by 25 Jul, Thursday
        </Typography>
        <Typography variant="body1" gutterBottom>
          ₹325
        </Typography>
        <Button variant="contained" color="primary">
          View Details
        </Button>
        <Typography variant="body1" gutterBottom>
          *Extra charges may apply on services and accessories not covered under standard installation
        </Typography>
        <Button variant="contained" color="primary">
          Watch Video
        </Button>
        <Typography variant="h6" gutterBottom>
          Color
        </Typography>
        <Typography variant="body1" gutterBottom>
          Set of
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" gutterBottom>
            1
          </Typography>
          <Typography variant="body1" gutterBottom>
            2
          </Typography>
          <Typography variant="body1" gutterBottom>
            3
          </Typography>
          <Typography variant="body1" gutterBottom>
            4
          </Typography>
          <Typography variant="body1" gutterBottom>
            5
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductCard;