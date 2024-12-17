import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import GradientButton from './GradientButton';
import FoundationLogo from '../assets/PNG/logo.png';
import { motion } from 'framer-motion'; // Import motion for animations
import { useMediaQuery } from 'react-responsive';
import OutlinedButton from './OutlineButton';

const Foundation = () => {

    //mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div
            id="foundation"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >

            {/* Animate the Box containing Image and Text */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
                style={{
                    display: 'flex',
                    gap: isMobile ? "" : "3rem",
                    justifyContent: "center",
                    alignItems: 'center',
                    flexDirection: isMobile ? "column" : 'row',
                    width: '80%',
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
                        src = {FoundationLogo}
                        alt="Foundation logo"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                        }}
                    />
                </motion.div>

                {/* Animate Text and Button Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? "center" : "" }}
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
                    <div 
                        style = {{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: isMobile ? 'column' : '',
                            gap: "1rem"
                        }}
                    >
                        <OutlinedButton text="Learn more" width= {"250px"}/>
                        <GradientButton text="Donate Today" width= {"250px"} />
                    </div>
                  
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Foundation;
