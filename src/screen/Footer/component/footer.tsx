// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width:'100%',
        backgroundColor: '#fff',
        // paddingX: '6rem',
        paddingY:'3rem',
        borderTop: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        position: "relative"
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Copyright © 2024 Brandstore. Powered by Brandstore.
      </Typography>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <Link href="#" aria-label="Facebook" color="inherit">
          <FacebookIcon />
        </Link>
        <Link href="#" aria-label="YouTube" color="inherit">
          <YouTubeIcon />
        </Link>
        <Link href="#" aria-label="Twitter" color="inherit">
          <TwitterIcon aria-label='Twitter review' />
        </Link>
        <Link href="#" aria-label="Instagram" color="inherit">
          <InstagramIcon />
        </Link>
        <Link href="#" aria-label="Google" color="inherit">
          <GoogleIcon aria-label='' />
        </Link>
        {/* <Link href="#" aria-label="Yelp" color="inherit">
          <YelpIcon />
        </Link> */}
      </Box>
    </Box>
  );
};

export default Footer;
