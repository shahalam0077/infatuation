import React from 'react';
import { Box, Container, Typography, Card, CardMedia, CardContent, Button, Grid, Divider, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import blackChair from '../../../../../../images/black-chair.jpeg';
import blackDarbar from '../../../../../../images/black-darbar.jpeg';
import vanHeusen from '../../../../../../images/van-heusen.jpeg';
import mobile from '../../../../../../images/mobile.webp';

const products = [
  {
    id: 1,
    image: blackChair,
    title: 'Apple iPhone 15 (Black, 128 GB)',
    oldPrice: '₹79,900',
    newPrice: '₹70,999',
    discount: '11% off',
    emi: 'No Cost EMI from ₹11834/month'
  },
  {
    id: 2,
    image: blackChair,
    title: 'Apple iPhone 14 (Blue, 128 GB)',
    oldPrice: '₹69,900',
    newPrice: '₹58,999',
    discount: '16% off',
    emi: 'EMI from ₹2075/month'
  },
  {
    id: 3,
    image: vanHeusen,
    title: 'Apple iPhone 15 Plus (Blue, 128 GB)',
    oldPrice: '₹89,900',
    newPrice: '₹81,999',
    discount: '9% off',
    emi: 'No Cost EMI from ₹13667/month'
  },
];

const MobileBanner: React.FC = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box display="flex" flexDirection="column" gap={4} pt={4}>
        <Grid container spacing={2}>
          <Grid item xs={3.5}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6" gutterBottom>You May Like...</Typography>
              <IconButton size="small">
                <ArrowForwardIosIcon color='primary' sx={{padding:'10px',backgroundColor:'ButtonHighlight',borderRadius:'50%',cursor:'pointer'}} />
              </IconButton>
            </Box>
            <Divider sx={{ mb: 2 }} />

            <Box 
              sx={{
                overflowY: 'auto',
                maxHeight: '75vh', // Adjust this height as needed
                pr: 1, // Padding for right scrollbar
              }}
            >
              {products.map(product => (
                <Card key={product.id} sx={{ mb: 3, display: 'flex' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 100, objectFit: 'contain', marginRight: 1 }}
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent sx={{ flex: '1 0 auto', padding: '8px 16px' }}>
                    <Typography gutterBottom variant="subtitle2" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                      <span style={{ textDecoration: 'line-through' }}>{product.oldPrice}</span> {product.newPrice} <span style={{ color: 'green' }}>{product.discount}</span>
                    </Typography>
                    <Typography sx={{color:'green',fontWeight:'600'}} variant="body2" color="textSecondary" component="div">
                      {product.emi}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid item xs={8.5}>
            <Box position="relative" height="100%">
              <img
                src={mobile}
                alt="Top Selling Smartphones"
                style={{ width: '100%', height: '98%', objectFit: 'cover', borderRadius: '8px' }}
              />
              {/* <Box position="absolute" bottom="16px" left="16px" bgcolor="rgba(0, 0, 0, 0.6)" borderRadius="4px" p={2}>
                <Typography variant="h4" color="white">Top Selling Smartphones</Typography>
                <Button variant="contained" color="primary">Explore Now</Button>
              </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MobileBanner;
