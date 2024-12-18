import React, { useState, useEffect } from 'react';
import { navCol } from '../utils/Colors';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import { useNavigate } from 'react-router-dom';

import Button from '../components/buttons/GradientButton';
import { Typography } from '@mui/material';
import SocialLinks from '../components/SocialLinks';
import mainLogo from '../assets/PNG/NAA_AMANUA.png'
import DonateToday from '../components/modal/DonateToday.jsx';

const NavBar = ({ children }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

    const [activeLink, setActiveLink] = useState('home'); // Track active link

    const linkToId = [
        { label: 'Home', id: 'home', path: '/' },
        { label: 'About', id: 'about', path: '/about' },
        { label: 'News', id: 'news', path: '/' },
        { label: 'Music', id: 'music', path: '/' },
        { label: 'Videos', id: 'videos', path: '/' },
        { label: 'Foundation', id: 'foundation', path: '/' },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

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

        if (['home', 'news', 'music', 'videos', 'foundation'].includes(id) && path) {

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

    const [isToggled, setIsToggled] = useState(false);

    // Handle drawer toggle 
    const toggleDrawer = () => {
        setIsToggled(!isToggled);
    };

    // Set active link based on section in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -50% 0px',
            }
        );

        linkToId.forEach(link => {
            const section = document.getElementById(link.id);
            if (section) observer.observe(section);
        });

        return () => {
            linkToId.forEach(link => {
                const section = document.getElementById(link.id);
                if (section) observer.unobserve(section);
            });
        };
    }, [linkToId]);

    return (
        <div>
            <nav
                style={{
                    backgroundColor: navCol,
                    color: '#000',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    width: "100%",
                    height: isMobile ? 70 : 100,

                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    justifyItems: 'center',
                    width: isMobile ? "90%" : "80%",
                    height: isMobile ? 50 : 100,
                    margin: "auto",

                }}>
                    {/* LOGO */}
                    <div>
                        <img
                            src={mainLogo}
                            alt="nAA AMANUA LOGO"
                            style={{
                                width: isMobile ? "150px" : "100%",
                                height: isMobile ? "auto" : 80,
                                cursor: 'pointer'
                            }}
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                    </div>


                    {/* NAV LINKS */}
                    {isMobile || isTablet ? (
                        <div
                            onClick={toggleDrawer}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: "center",
                                gap: "1rem",
                                cursor: "pointer",
                            }}
                        >
                            <motion.div
                                style={{
                                    width: "30px",
                                    height: "3px",
                                    background: "#000",
                                    borderRadius: "2px",
                                    originX: "center",
                                    originY: "center",
                                }}
                                animate={{
                                    rotate: isToggled ? 45 : 0,
                                    y: isToggled ? 5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                            <motion.div
                                style={{
                                    width: "30px",
                                    height: "3px",
                                    background: "#000",
                                    borderRadius: "2px",
                                    originX: "center",
                                    originY: "center",
                                }}
                                animate={{
                                    rotate: isToggled ? -45 : 0,
                                    y: isToggled ? -5 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.div>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: "2.5rem",
                                width: '50%',
                                alignItems: 'center',
                                color: "white",
                                textTransform: "uppercase",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
                            <SocialLinks />

                            <div>
                                <Button text={"Donate Today"} onClick={handleOpen} />
                            </div>
                        </div>
                    )}
                </div>

                {(isMobile || isTablet) && (
                    <MobileNav open={isToggled} setOpen={setIsToggled} />
                )}

            </nav>

            {modalOpen &&   <DonateToday open={modalOpen} onClose={handleClose} />}

            <div>{children}</div>
        </div>
    );
};

export default NavBar;
