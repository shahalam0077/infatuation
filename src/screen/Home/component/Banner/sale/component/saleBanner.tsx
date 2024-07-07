import Button from '@mui/material/Button';
import React from 'react';
import '../css/sale.css'

const SaleBanner = () => {
  return (
    <div className="banner-sale">
        <h2>Sale Up to 70% Off!</h2>
        <p>Shop Now and Save Big on All Items.</p>
        <Button variant="contained" size="medium">Shop Now</Button>
      </div>
  )
}

export default SaleBanner;