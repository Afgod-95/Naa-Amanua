import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import Button from './GradientButton';
import { Typography } from '@mui/material';
import SimpleSlider from './Carousel';  // Assuming this component supports swipe gestures
import AwardImage from '../assets/PNG/award.png';

const GreatestHits = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered album

    return (
        <div
            id='music'
            style={{
                gap: "2rem",
                width: "80%",
                margin: "0% auto",
                paddingTop: "3%",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                {/* Animated Greatest Hits Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography variant="h4" style={{ display: "flex", flexDirection: "column" }}>
                        Greatest
                        <span style={{ fontWeight: "bold", fontSize: "5rem" }}> Hits</span>
                    </Typography>
                </motion.div>

                {/* Animated Discover More Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Button text="Discover more albums" width='250px' />
                </motion.div>
            </motion.div>

            {/* Carousel with Hover Effects for Albums */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <SimpleSlider>
                    {/* Sample Album Carousel Item */}
                    <div
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            width: '300px', // Adjust width as needed
                            height: '400px', // Adjust height as needed
                            zIndex: 1, // Ensure it is clickable
                        }}
                        onMouseEnter={() => setHoveredIndex(0)} // Set index on hover
                        onMouseLeave={() => setHoveredIndex(null)} // Reset index on hover out
                    >
                        <img src={AwardImage} alt="Album Cover" style={{ width: '100%', height: '100%' }} />
                        {hoveredIndex === 0 && (
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '20px',
                                    color: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '0.5rem',
                                    zIndex: 2, // Ensure overlay appears on top
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography variant="h6" style={{ fontSize: '1.5rem' }}>Album Title</Typography>
                                <Button text="Play Now" width="120px" />
                            </motion.div>
                        )}
                    </div>
                    {/* Add more albums here with similar structure */}
                </SimpleSlider>
            </motion.div>
        </div>
    );
};

export default GreatestHits;
