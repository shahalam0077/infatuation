import { Box, Typography } from '@mui/material'
import React from 'react';
import "../css/store.css";

const Categories = () => {
  return (
    <Box>
        <Typography variant="h5">Shopping Cart</Typography>
        <div className='cat-item'>
           <div>Accessories</div>
           <div>(7)</div>
        </div>
        <div className='cat-item'>
           <div>Women</div>
           <div>(10)</div>
        </div>
        <div className='cat-item'>
           <div>Men</div>
           <div>(13)</div>
        </div>
    </Box>
  )
}

export default Categories