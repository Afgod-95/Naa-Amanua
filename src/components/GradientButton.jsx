import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ onClick, text, width = '150px', height = '50px' }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        background: 'linear-gradient(90deg, #FFD700, #FFAA00)', // Gold gradient
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          background: 'linear-gradient(90deg, #FFAA00, #FFD700)', // Reverse gradient on hover
        },
      }}
    >
      {text}
    </Button>
  );
};

export default GradientButton;
