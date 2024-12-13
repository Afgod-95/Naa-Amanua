import React from 'react';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import Picture from '../assets/PNG/picture.png';
import Button from '../components/GradientButton';
import { goldText } from '../constant/Colors';
import News_bg from '../assets/PNG/News_bg.png';
import News from '../components/News';
import GreatestHits from '../components/GreatestHits';
import FeaturedVideo from '../components/FeaturedVideo';
import NewsLetter from '../components/NewsLetter';
import About from '../components/About';
import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
import { Typography } from '@mui/material';  // Importing Typography component

const Home = () => {
    return (
        <div style={{ height: "100vh" }}>
            <div className='image' id="home">
                <motion.div
                    style={{
                        width: "80%",
                        marginTop: "6%",
                        margin: "0% auto",
                        backgroundPosition: "center",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <div
                        style={{
                            width: "550px",
                            height: "90vh",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={Picture}
                            alt="Naa Amamua"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "50%",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{
                                    color: "#fff",
                                    textTransform: "capitalize",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                Naa
                                <span style={{ textTransform: "capitalize" }}>Amanua</span>
                                <Typography
                                    variant="h2"
                                    component="span"
                                    sx={{
                                        color: goldText,
                                    }}
                                >
                                    "Wulomei"
                                </Typography>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Typography variant="body1" sx={{ textTransform: "none", color: "#fff" }}>
                                The official website of the legendary Mary Naa Amanua Dodoo
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <Button text={"Learn More"} width={"150px"} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* --------------------ABOUT */}
           
                <About />
           

            {/* --------------------NEWS */}
            <motion.div
                id='news'
                style={{
                    width: "100%",
                    height: "100%",
                }}

            >
                <News />
            </motion.div>

            {/* --------------------GREATEST HITS*/}
            
                <GreatestHits />
           
            
                <FeaturedVideo />
           

           
                <Foundation />
            

            
                <NewsLetter />
           

            
                <Footer />
           
        </div>
    );
};

export default Home;
