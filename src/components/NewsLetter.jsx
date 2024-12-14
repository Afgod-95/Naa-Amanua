import React, { useState } from 'react';
import GradientButton from './GradientButton';
import { TextField, Box, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const NewsLetter = () => {
  // Responsive layout
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });

  // State for error handling
  const [error, setError] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, firstName, lastName } = formData;

    // Basic validation
    if (!email || !firstName || !lastName) {
      setError('All fields are required.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    // Simulate API call
    console.log('Subscribed:', formData);
    alert(`Thank you for subscribing, ${firstName}!`);
    setFormData({ email: '', firstName: '', lastName: '' }); // Reset form
  };

  return (
    <div
      id="news-letter-signup"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        padding: '2rem 0',
      }}
    >
      <Typography 
        variant="h4" 
        style={{ marginBottom: '1rem', color: '#000', marginTop: '3rem', textAlign: 'center' }}
      >
        Newsletter
      </Typography>
      <Typography 
        variant="h5" 
        style={{ fontSize: '1.5rem', color: '#AAAAAA', textAlign: 'center' }}
      >
        Sign Up
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: isMobile ? '90%' : '40%',
          margin: '0 auto',
          gap: '1rem',
          alignItems: 'center',
          padding: '1.5rem',
        }}
        onSubmit={handleSubmit}
      >
        {/* Email Input */}
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleInputChange}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        />

        {/* First Name Input */}
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          value={formData.firstName}
          onChange={handleInputChange}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        />

        {/* Last Name Input */}
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={formData.lastName}
          onChange={handleInputChange}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        />

        {/* Error Message */}
        {error && (
          <Typography 
            style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center', marginBottom: '1rem' }}
          >
            {error}
          </Typography>
        )}

        {/* Privacy Policy and Subscribe Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <Typography style={{ color: '#000', fontSize: '0.9rem', textAlign: 'center' }}>
            You can unsubscribe anytime. For more details, review our{' '}
            <span style={{ color: '#007BFF', cursor: 'pointer' }}>Privacy Policy</span>.
          </Typography>
          <GradientButton text="Subscribe" width="250px" onClick={handleSubmit} />
        </div>
      </Box>
    </div>
  );
};

export default NewsLetter;
