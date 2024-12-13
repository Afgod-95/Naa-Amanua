import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GradientButton from './GradientButton';
import { motion } from 'framer-motion'; // Import motion for animations

const Foundation = () => {
    return (
        <div
            id="foundation"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#F5F5F5',
                padding: '3rem 1.5rem',
            }}
        >
            {/* Animate Mission Statement */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    style={{
                        marginBottom: '1.5rem',
                        color: '#333',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    Our Mission
                </Typography>
            </motion.div>

            {/* Animate the Box containing Image and Text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '80%',
                    marginBottom: '3rem',
                }}
            >
                {/* Animate Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Box
                        component="img"
                        src="https://via.placeholder.com/600x400" // Replace with Naa Amanua's photo URL
                        alt="Naa Amanua"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            borderRadius: '10px',
                            marginBottom: '2rem',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </motion.div>

                {/* Animate Text and Button Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="body1"
                        style={{
                            maxWidth: '800px',
                            marginBottom: '2rem',
                            color: '#555',
                            fontSize: '1.25rem',
                            lineHeight: '1.8',
                            textAlign: 'justify',
                        }}
                    >
                        Our mission is to preserve Naa Amanua's music heritage for future generations and educate and train young girls and boys to develop music playing and singing skills.
                    </Typography>
                    {/* Animate Donate Button */}
                    <GradientButton text="Donate" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Foundation;
