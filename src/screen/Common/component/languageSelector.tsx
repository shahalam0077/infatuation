import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Divider,
} from '@mui/material';

const languages = [
  {
    region: 'Asia Pacific',
    countries: [
      { name: 'Australia', language: 'About Amazon (English)', flag: '🇦🇺' },
      { name: 'India', language: 'About Amazon (English)', flag: '🇮🇳' },
      { name: 'Japan', language: 'About Amazon (日本語)', flag: '🇯🇵' },
      { name: 'Singapore', language: 'About Amazon (English)', flag: '🇸🇬' },
    ],
  },
  {
    region: 'Europe',
    countries: [
      { name: 'European Union', language: 'About Amazon (English)', flag: '🇪🇺' },
      { name: 'France', language: 'About Amazon (Français)', flag: '🇫🇷' },
      { name: 'Germany', language: 'About Amazon (Deutsch)', flag: '🇩🇪' },
      { name: 'Italy', language: 'About Amazon (Italiano)', flag: '🇮🇹' },
      { name: 'Poland', language: 'About Amazon (Polskie)', flag: '🇵🇱' },
      { name: 'Spain', language: 'About Amazon (Español)', flag: '🇪🇸' },
      { name: 'United Kingdom', language: 'About Amazon (English)', flag: '🇬🇧' },
    ],
  },
  {
    region: 'Americas',
    countries: [
      { name: 'United States', language: 'About Amazon (English)', flag: '🇺🇸' },
      { name: 'Mexico', language: 'About Amazon (Español)', flag: '🇲🇽' },
      { name: 'Canada', language: 'About Amazon (English)', flag: '🇨🇦' },
      { name: 'Brazil', language: 'About Amazon (Português)', flag: '🇧🇷' },
    ],
  },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Language
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>
          <Typography variant="h6">International Sites</Typography>
          <Divider sx={{mt:1}}/>
        </DialogTitle>
        <DialogContent>
          {languages.map((region) => (
            <div style={{paddingBlock:'20px'}} key={region.region}>
              <Typography variant="subtitle1" gutterBottom>
                {region.region}
              </Typography>
              <Grid container spacing={2}>
                {region.countries.map((country) => (
                  <Grid item xs={6} sm={4} md={3} key={country.name}>
                    <Typography variant="body1">
                      {country.flag} {country.name}
                    </Typography>
                    <Typography variant="body2">{country.language}</Typography>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LanguageSelector;
