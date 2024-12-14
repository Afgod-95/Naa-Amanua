import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { navCol } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import GradientButton from '../components/GradientButton';
import { Typography } from '@mui/material';

export default function MobileNav({ open, setOpen }) {
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    
     const [activeLink, setActiveLink] = useState('home'); // Track active link
    
        const linkToId = [
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'News', id: 'news' },
            { label: 'Music', id: 'music' },
            { label: 'Videos', id: 'videos' },
            { label: 'Foundation', id: 'foundation' },
        ];
    
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
        const scrollToSection = (id) => {
            setActiveLink(id);
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });
        };
    



    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices

    const DrawerList = (
        <Box
            sx={{
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



                <div style={{ display: "flex", flexDirection: "column",  gap: ".5rem" }}>
                    {linkToId.map((link, index) => (
                        <div
                            key={index}
                            className="links"
                            onClick={() => scrollToSection(link.id)}
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

                {/* SOCIAL LINKS */}
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                    <Link to="" target="blank" className="icons">
                        <FaInstagram size={24}  />
                    </Link>
                    <Link className="icons">
                        <FaSquareFacebook size={24} />
                    </Link>
                    <Link className="icons">
                        <IoLogoYoutube size={24}  style={{ fontSize: "30px" }} />
                    </Link>
                </div>

                <div>
                    <GradientButton text={"News Letter"} onClick={() => scrollToSection("news-letter-signup")} />
                </div>







            </div>
        </Box>
    );

    return (
        <Drawer
            anchor="right" // Open from the right
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    width: isSmallMob ? "65%" : "55%"
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
}
