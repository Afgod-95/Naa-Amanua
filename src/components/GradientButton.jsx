import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ onClick, text, width = '150px', height = '50px' }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        background: 'linear-gradient(90deg,rgba(170, 121, 14, 0.6),rgb(175, 122, 14))', // Gold gradient
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          background: 'linear-gradient(90deg,rgb(177, 123, 14),rgb(218, 152, 11))', // Reverse gradient on hover
        },
      }}
    >
      {text}
    </Button>
  );
};


export default GradientButton;
