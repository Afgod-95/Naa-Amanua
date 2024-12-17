import React from 'react';
import { Button } from '@mui/material';

const OutlinedButton = ({ onClick, text, width = '150px', height = '50px' }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        backgroundColor: 'transparent', 
        color: 'rgb(143, 143, 143)', 
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: '5px',
        border: '1.5px solid rgb(143, 143, 143)', 
        boxShadow: 'none', 
        fontSize: "10px",
        '&:hover': {
          backgroundColor:'rgb(143, 143, 143)', 
          color: '#000', 
        },
      }}
    >
      {text}
    </Button>
  );
};

export default OutlinedButton;
