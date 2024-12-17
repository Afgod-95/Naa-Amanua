import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { navCol } from '../utils/Colors';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import GradientButton from '../components/buttons/GradientButton.jsx';
import { Typography } from '@mui/material';
import SocialLinks from '../components/SocialLinks';
import DonateToday from '../components/modal/DonateToday.jsx';

export default function MobileNav({ open, setOpen }) {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const [activeLink, setActiveLink] = useState('home'); // Track active link

    const linkToId = [
        { label: 'Home', id: 'home', path: '/' },
        { label: 'About', id: 'about', path: '/about' },
        { label: 'News', id: 'news', path: '/' },
        { label: 'Music', id: 'music', path: '/' },
        { label: 'Videos', id: 'videos', path: '/' },
        { label: 'Foundation', id: 'foundation', path: '/' },
    ];

    const navigate = useNavigate();

    // Add shadow to navbar and change position based on reverse scrollY
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('nav').style.boxShadow = '0px 2px 10px rgba(0,0,0,0.2)';
                document.querySelector('nav').style.position = 'fixed';
            } else {
                document.querySelector('nav').style.boxShadow = 'none';
                document.querySelector('nav').style.position = 'relative';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scroll to section
    const scrollToSection = (id, path) => {

        if (['home', 'news', 'music', 'videos', 'foundation', 'news-letter-signup'].includes(id) && path) {

            const element = document.getElementById(id);
            if (element) {
                setActiveLink(id);
                element.scrollIntoView({ behavior: 'smooth' });

            } else {
                console.warn(`Element with ID "${id}" not found.`);
            }
            navigate(path);
        }
        else if (path) {
            console.warn(`No ID provided for scrolling. Path "${path}" was passed.`);
            navigate(path);
        }
    };




    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const DrawerList = (
        <Box
            sx={{
                width: "100%",
                height: '100%',
                backgroundColor: navCol,
                color: '#000',
                overflow: "hidden"
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <div
                style={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    gap: "2rem",
                    alignItems: 'flex-start',
                    padding: '20px',
                    marginTop: "10%",


                }}
            >



                <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                    {linkToId.map((link, index) => (
                        <div
                            key={index}
                            className="links"
                            onClick={() => scrollToSection(link.id, link.path)}
                            style={{
                                cursor: 'pointer',
                                color: activeLink === link.id ? '#808080' : '#000', // Set grey for active link
                                fontWeight: activeLink === link.id ? 'bold' : 'normal',
                            }}
                        >
                            <Typography sx={{ color: activeLink === link.id ? '#808080' : '#000' }} variant="body1">
                                {link.label}
                            </Typography>
                        </div>
                    ))}

                </div>

                <SocialLinks />

                <div>
                    <GradientButton text={"Donate Today"} onClick={handleOpen} />
                </div>

            </div>
        </Box>
    );

    return (
        <> <Drawer
            anchor="right" // Open from the right
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    width: isSmallMob ? "65%" : isTablet ? "20%" : "55%"
                },
            }}
        >
            {DrawerList}
        </Drawer>
            {modalOpen && <DonateToday open={modalOpen} onClose={handleClose} />}

        </>

    );
}
