import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import Button from '../buttons/GradientButton';
import { Typography } from '@mui/material';
import Carousel from '../Carousel'; 
import { useMediaQuery } from 'react-responsive';

const GreatestHits = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered album

    //mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div
            id='music'
            style={{
                gap: "2rem",
                width: isMobile ? "90%"  : "80%",
                margin: "0% auto",
                paddingTop: "3%",
            }}
        >
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile ? "center": "space-between",
                    alignItems: isMobile ? "center" : "flex-end",
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
                    <Typography variant="h4" style={{ display: "flex", fontSize: "20px", flexDirection: "column" }}>
                        Featured
                        <span style={{ fontWeight: "bold", fontSize: "5rem" }}> Hits</span>
                    </Typography>
                </motion.div>
            </motion.div>

            {/* Carousel with Hover Effects for Albums */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Carousel />
            </motion.div>
        </div>
    );
};

export default GreatestHits;
