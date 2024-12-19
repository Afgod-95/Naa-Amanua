import React from 'react';
import { Typography, Box, Modal, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import GradientButton from '../buttons/GradientButton.jsx';
import OutlinedButton from '../buttons/OutlineButton.jsx';

const DonateToday = ({ open, onClose }) => {
    const email = "dnaaamanua@gmail.com";

    // Use media query to determine screen size
    const isLargeScreen = useMediaQuery('(min-width:768px)');
    const isSmallScreen = useMediaQuery('(max-width:767px)');

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="donate-today-title"
            slotProps={{
                onClick: onClose,
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
                    padding: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        width: '90%',
                        maxWidth: '900px',
                        margin: '0 auto',
                        borderRadius: '10px',
                        backgroundColor: '#f9f9f9',
                        boxShadow: 4,
                        overflow: 'hidden', // Prevent content from overflowing
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflowY: 'auto', // Add scrolling only if content overflows
                            maxHeight: '60vh', // Limit the height to avoid overflow on smaller screens
                            width: '100%',
                        }}
                    >
                        {/* Content Boxes */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: isLargeScreen ? 'row' : 'column',
                                gap: 2,
                                paddingTop: isSmallScreen ? '17rem' : '',
                                flexWrap: 'wrap',
                                scrollBehavior: 'smooth',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                            }}
                        >
                            {/* Reusable box styling */}
                            {[
                                {
                                    title: "Strengthening Legacy Support",
                                    content:
                                        "Your donation helps us preserve the rich musical legacy of Naa Amanua for years to come.",
                                },
                                {
                                    title: "Building Foundation Support",
                                    content:
                                        "Your donation helps us nurture young girls and boys with the skills and training they need to thrive in music.",
                                },
                                {
                                    title: "The Power of Love Support",
                                    content:
                                        "Your donation helps appreciate and support the unsung heroes of our industry – the ailing and aged creative.",
                                },
                                {
                                    title: "Contact Us",
                                    content: (
                                        <>
                                            Got a project or questions on your mind?
                                            <br />
                                            <a
                                                href={`mailto:${email}`}
                                                style={{ color: '#000', textDecoration: 'none', textTransform: 'lowercase' }}
                                            >
                                                {email}
                                            </a>
                                        </>
                                    ),
                                },
                            ].map((box, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        padding: '20px',
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                        border: '1px solid gray',
                                        textAlign: 'center',
                                        flex: '1 1 calc(33% - 16px)',
                                        minWidth: '250px',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                                        {box.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'left' }}>
                                        {box.content}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                            flexWrap: 'wrap',
                            width: '100%',
                        }}
                    >
                        
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                                
                                width: '100%',
                            }}
                        >
                            <img src="https://i0.wp.com/wundef.com/wp-content/uploads/2024/08/img_9045-1.jpg?fit=760%2C460&ssl=1" alt=""
                                style={{
                                    maxWidth: '200px',
                                    height: '100px',
                                    borderRadius: '20px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                            <div>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                   Phone
                                </Typography>

                                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1rem' }}>
                                  +233244038547
                                </Typography>

                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Name
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1rem' }}>
                                    Naa Amanua Dodoo
                                </Typography>
                            </div>
                        </div>

                        <OutlinedButton text="Close" onClick={onClose} />
                    </Box>
                </Box>
            </motion.div>
        </Modal>
    );
};

export default DonateToday;
