import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Logo from "../assets/PNG/logo.png";
import { Typography } from '@mui/material'; // Import Typography from MUI



const variants = {
    section3: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    logo: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    links: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
    },
    socialIcons: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
    },
    copyright: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
    }
};

const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // All mobile devices
    const isSmallMob = useMediaQuery({ query: '(max-width: 568px)' }); // smaller mobile devices

    return (
        <>



            {isMobile ? (

                <div
                    style={{padding: "1rem", display: "flex", flexDirection: "column", gap: "-5rem"}}
                >
                    <div style={{
                        textAlign: "center",
                    }}>
                        <Link to="">
                            <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Terms of Service</Typography>
                        </Link>
                        <Link to="">
                            <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Privacy Policy</Typography>
                        </Link>
                        <Link to="">
                            <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Contact</Typography>
                        </Link>
                    </div>


                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        {/* Logo with animation */}
                        <motion.div variants={variants.logo}>
                            <img src={Logo} alt="Logo"
                                style={{
                                    width: "250px",
                                    height: "180px",
                                }}
                            />
                        </motion.div>
                        {/* Social icons with animation */}
                        <motion.div
                            style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
                            variants={variants.socialIcons}
                        >
                            <Link to="https://www.instagram.com/radicalherdproductions/?hl=en" target='blank' className='info'>
                                <FaInstagram size={isMobile ? 24 : 30} />
                            </Link>
                            <Link className='info'>
                                <FaSquareFacebook size={isMobile ? 24 : 30} />
                            </Link>
                            <Link className='info'>
                                <IoLogoYoutube size={isMobile ? 24 : 35} style={{ fontSize: "30px" }} />
                            </Link>
                        </motion.div>

                        {/* Copyright section with animation */}
                        <motion.div variants={variants.copyright}>
                            <Typography variant="body2" style={{ color: "#000", textAlign: "center", fontSize: isMobile ? "14px" : "15px" }}>
                                © 2025 Naa Amanua. All rights reserved.
                            </Typography>
                        </motion.div>
                    </div>


                </div>

            ) : (

                <motion.div

                    style={{
                        marginTop: "2rem",
                        margin: "5% auto",
                        width: isMobile ? "90%" : '80%',
                    }}
                    variants={variants.section3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center",
                        gap: '1rem',
                        width: '100%'
                    }}>
                        {/* Logo with animation */}
                        <motion.div variants={variants.logo}>
                            <img src={Logo} alt="Logo"
                                style={{
                                    width: "300px",
                                    height: "200px",
                                }}
                            />
                        </motion.div>

                        {/* Links section with animation */}
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                gap: '2.5rem',
                                width: '100%',
                            }}
                            variants={variants.links}
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignContent: "center",
                                gap: '1rem',
                                width: '100%',
                                marginTop: '2rem',
                            }}>
                                <Link to="">
                                    <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Terms of Service</Typography>
                                </Link>
                                <Link to="">
                                    <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Privacy Policy</Typography>
                                </Link>
                                <Link to="">
                                    <Typography variant="h6" style={{ cursor: "pointer", color: "#000" }}>Contact</Typography>
                                </Link>
                            </div>

                            {/* Copyright section with animation */}
                            <motion.div variants={variants.copyright}>
                                <Typography variant="body2" style={{ color: "#000", textAlign: "center", fontSize: isMobile ? "14px" : "15px" }}>
                                    © 2025 Naa Amanua. All rights reserved.
                                </Typography>
                            </motion.div>
                        </motion.div>

                        {/* Social icons with animation */}
                        <motion.div
                            style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
                            variants={variants.socialIcons}
                        >
                            <Link to="https://www.instagram.com/radicalherdproductions/?hl=en" target='blank' className='info'>
                                <FaInstagram size={isMobile ? 24 : 30} />
                            </Link>
                            <Link className='info'>
                                <FaSquareFacebook size={isMobile ? 24 : 30} />
                            </Link>
                            <Link className='info'>
                                <IoLogoYoutube size={isMobile ? 24 : 35} style={{ fontSize: "30px" }} />
                            </Link>
                        </motion.div>
                    </div>
                    </motion.div>

                )}
              
        </>
    );
}

export default Footer;
