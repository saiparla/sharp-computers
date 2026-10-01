import React from 'react';
import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsApp = () => {
  return (
    <Box
      component="a"
      href="https://wa.me/919246268485?text=Hello,I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 9999,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1) translateY(-5px)',
          color: 'white',
          boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
        }
      }}
    >
      <WhatsAppIcon sx={{ fontSize: '36px' }} />
    </Box>
  );
};

export default FloatingWhatsApp;
