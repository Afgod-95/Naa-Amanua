import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { navCol } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
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

                {/* SOCIAL LINKS */}
                <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                    <Link to="" target="blank" className="icons">
                        <FaInstagram size={24} />
                    </Link>
                    <Link className="icons">
                        <FaSquareFacebook size={24} />
                    </Link>
                    <Link className="icons">
                        <IoLogoYoutube size={24} style={{ fontSize: "30px" }} />
                    </Link>
                </div>

                <div>
                    <GradientButton text={"News Letter"} onClick={() => scrollToSection("news-letter-signup", '/')} />
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
                    width: isSmallMob ? "65%" : isTablet ? "20%" : "55%"
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
}
