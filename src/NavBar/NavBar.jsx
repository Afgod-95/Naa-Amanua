import React, { useState } from 'react';
import { navCol } from '../constant/Colors';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import Logo from '../assets/PNG/logo.png';
import MobileNav from '../components/MobileNav';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Button from '../components/GradientButton';
import { Typography } from '@mui/material'; // Import Typography

const NavBar = ({ children }) => {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices
    const [activeLink, setActiveLink] = useState('home'); // Track active link

    const linkToId = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'News', id: 'news' },
        { label: 'Music', id: 'music' },
        { label: 'Foundation', id: 'foundation' },
    ];

   // Add shadow to navbar and change position based on reverse scrollY
window.addEventListener('scroll', () => {
    // When scrollY is greater than 100, show box shadow and fix position
    if (window.scrollY > 100) {
        document.querySelector('nav').style.boxShadow = '0px 2px 10px rgba(0,0,0,0.2)';
        document.querySelector('nav').style.position = 'fixed';
    } else {
        // When scrollY is less than 100, remove box shadow and reset position
        document.querySelector('nav').style.boxShadow = 'none';
        document.querySelector('nav').style.position = 'relative';
    }
});


    const scrollToSection = (id) => {
        setActiveLink(id); // Set active link
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToLetter = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const [isToggled, setIsToggled] = useState(false);

    // Handle drawer toggle 
    const toggleDrawer = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <nav
                style={{
                    backgroundColor: navCol,
                    color: '#000',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    boxSizing: 'border-box',
                    width: "100%",
                    height: isMobile ? 60 : 100
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifyItems: 'center',
                    width: isMobile ? "90%" : "80%",
                    height: isMobile ? 60 : 100,
                    margin: 'auto',
                }}>

                    {/* ================LOGO=========================== */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <img src={Logo} alt="Radical Herd Logo"
                            style={{
                                width: isMobile ? 50 : 250,
                                height: isMobile ? 50 : 195,
                                cursor: 'pointer'
                            }}
                        />
                    </div>

                    {/* ================NAV LINKS==================== */}
                    {/* Mobile Menu */}
                    {isMobile ? (
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
                                    background: "#fff",
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
                                    background: "#fff",
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
                                        onClick={() => scrollToSection(link.id)}
                                        style={{
                                            cursor: 'pointer',
                                            color: activeLink === link.id ? '#FFD700' : '#000',
                                            fontWeight: activeLink === link.id ? 'bold' : 'normal',
                                        }}
                                    >
                                        <Typography sx = {{color: "#000"}}variant="body1">{link.label}</Typography>
                                    </div>
                                ))}
                            </div>

                            {/* =====SOCIAL LINKS============== */}
                            <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                                <Link to="" target='blank' className='icons'>
                                    <FaInstagram size={isMobile ? 24 : 30} />
                                </Link>
                                <Link className='icons' >
                                    <FaSquareFacebook size={isMobile ? 24 : 30} />
                                </Link>
                                <Link className='icons'>
                                    <IoLogoYoutube size={isMobile ? 24 : 35} style={{ fontSize: "30px" }} />
                                </Link>
                            </div>

                            <div>
                                <Button text={"News Letter"} onClick={() => scrollToLetter("news-letter-signup")} />
                            </div>
                        </div>
                    )}
                </div>

                {isMobile && (
                    <MobileNav open={isToggled} setOpen={setIsToggled} /> // Pass the correct props
                )}
            </nav>

            <div>{children}</div>
        </div>
    );
}

export default NavBar;
