import React from 'react';
import { Box, Typography, List } from '@mui/material';
import BestSellerItem from './bestSeller';
import blueDenimShorts from '../../../images/product-w-jeans1.jpg';
import tshirt5 from '../../../images/tshirt5.jpg';
import slimFitBlueJeans from '../../../images/product-w-jeans3.jpg';
import sportsRedShoe from '../../../images/sports-red-shoe.jpg';

const bestSellers = [
  { image: blueDenimShorts, name: 'Blue Denim Shorts', price: '$130.00', originalPrice: '$150.00' },
  { image: sportsRedShoe, name: 'DNK Red Shoes', price: '$150.00' },
  { image: tshirt5, name: 'DNK Green Tshirt', price: '$40.00 - $45.00' },
  { image: slimFitBlueJeans, name: 'Slim Fit Blue Jeans', price: '$150.00' },
  { image: blueDenimShorts, name: 'DNK Yellow Shoes', price: '$120.00', originalPrice: '$150.00' },
];

const BestSellers: React.FC = () => {
  return (
    <Box sx={{ width: '100%'}}>
      <Typography variant="h6" gutterBottom>
        Our Best Sellers
      </Typography>
      <List>
        {bestSellers.map((item, index) => (
          <BestSellerItem
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            originalPrice={item.originalPrice}
          />
        ))}
      </List>
    </Box>
  );
};

export default BestSellers;
