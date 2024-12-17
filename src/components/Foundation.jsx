import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import GradientButton from './GradientButton';
import FoundationLogo from '../assets/PNG/logo.png';
import { motion } from 'framer-motion'; // Import motion for animations
import { useMediaQuery } from 'react-responsive';
import OutlinedButton from './OutlineButton';
import DonateToday from './DonateToday';

const Foundation = () => {

    const [isReadMore, setIsReadMore] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const handleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

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
                    justifyContent: !isReadMore ? "flex-start" : "center",
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
                        src={FoundationLogo}
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
                            marginTop: '2rem',
                            color: '#555',
                            fontSize: '1.25rem',
                            lineHeight: '1.8',
                            textAlign: 'justify',
                        }}
                    >
                        At the heart of our mission is a passion to preserve the rich musical legacy of Naa Amanua for years to come.

                    </Typography>


                    {isReadMore && (
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

                                We are dedicated to nurturing the next generation of musicians by providing young girls and boys with the skills and training they need to thrive in music.

                            </Typography>
                        </motion.div>
                    )}


                    {isReadMore && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }}
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

                                Finally, we hope to show appreciation to the unsung heroes of our industry – the ailing and aged creative, by raising funds and providing aid to ensure they are not forgotten.
                            </Typography>
                        </motion.div>
                    )}


                    {modalOpen &&   <DonateToday open={modalOpen} onClose={handleClose} />}
                  



                    {/* Animate Donate Button */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: isMobile ? 'column' : '',
                            gap: "1rem"
                        }}
                    >
                        <OutlinedButton text="Learn more" width={"250px"} onClick={handleReadMore} />
                        <GradientButton text="Donate Today" width={"250px"} onClick={handleOpen} />
                    </div>

                </motion.div>
            </motion.div>
        </div>
    );
};

export default Foundation;
