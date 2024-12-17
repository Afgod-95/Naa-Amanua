import React from 'react';
import { Typography, Box, Button, Grid, Modal } from '@mui/material';
import { motion } from 'framer-motion';
import GradientButton from '../buttons/GradientButton.jsx';

const DonateToday = ({ open, onClose }) => {
    const phoneNumber = "24 403 8547";
    const imageUrl = 'https://citinewsroom.com/wp-content/uploads/2020/03/MTN-Momo-e1584721116128.jpeg'; // Replace with the actual image URL



    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="donate-today-title"
            BackdropProps={{
                onClick: onClose, // Close modal on outside click
                style: { cursor: 'pointer' },
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Box
                    sx={{
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        boxShadow: 3,
                        position: 'relative',
                    }}
                >
                    {/* Content */}
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        {/* Image Section */}
                        <Grid item xs={12}>
                            <img
                                src={imageUrl}
                                alt="Mary Naa Amanua Dodoo"
                                style={{
                                    width: '100%',
                                    maxWidth: '200px',
                                    height: 'auto',
                                    borderRadius: '10%',
                                    marginBottom: '20px',
                                }}
                            />
                        </Grid>

                        {/* Text Section */}
                        <Grid item xs={12}>
                            <Typography variant="h6" style={{ marginBottom: '10px' }}>
                                Support via MTN Mobile Money
                            </Typography>

                            <Typography variant="h5" color="textSecondary" style={{ marginBottom: '10px', fontSize: '16px' }}>
                                <a href= {`tel:${phoneNumber}`} style={{color: '#000'}} > +233 {phoneNumber}</a>
                            </Typography>

                            <Typography variant="h5" color="textSecondary" style={{ marginBottom: '10px', fontSize: '16px' }}>
                                Mary Naa Amanua Dodoo
                            </Typography>

                                <GradientButton text = "Thank you for supporting us" width='50%' />


                        </Grid>
                    </Grid>

                    {/* Close Button */}
                    <Button
                        onClick={onClose}
                        variant="text"
                        color="error"
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            textTransform: 'none',
                        }}
                    >
                        Close
                    </Button>
                </Box>
            </motion.div>
        </Modal>
    );
};

export default DonateToday;
