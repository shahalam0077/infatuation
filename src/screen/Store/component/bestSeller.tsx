import React from 'react';
import { Box, Typography, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';

interface BestSellerItemProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string; // Optional
}

const BestSellerItem: React.FC<BestSellerItemProps> = ({ image, name, price, originalPrice }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar variant="square" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              {originalPrice && (
                <Typography component="span" variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                  {originalPrice}
                </Typography>
              )}
              <Typography component="span" variant="body2" color="textPrimary" style={{ marginLeft: originalPrice ? 8 : 0 }}>
                {price}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default BestSellerItem;
