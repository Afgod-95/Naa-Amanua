import React from 'react';
import { Button } from '@mui/material';

const GradientButton = ({ onClick, text, width = '150px', height = '50px' }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        background: 'radial-gradient(circle, #f6e098, #b38348,rgb(102, 75, 42))', // Gold radial gradient
        boxShadow: "none",
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: '5px',
        fontSize: "10px",
        '&:hover': {
          background: 'radial-gradient(circle, #f6e098, #b38348,rgb(102, 75, 42))', // Gold radial gradient

        },
      }}
    >
      {text}
    </Button>
  );
};


export default GradientButton;
