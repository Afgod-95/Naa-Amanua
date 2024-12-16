import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GradientButton from '../components/GradientButton';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <div
                id="about"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',

                    backgroundColor: '#F5F5F5',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="h3"  // MUI's variant for the main heading (similar to h1)
                        style={{
                            marginBottom: '2rem',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        About
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="body1"  // MUI's variant for body text
                        style={{
                            maxWidth: '900px',
                            lineHeight: '1.8',
                            fontSize: '1.25rem',
                            textAlign: 'justify',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Mary Naa Amanua Dodoo, popularly known as Naa Amanua, is a Ghanaian music legend who has been serenading audiences with her folklore music for decades. Her soulful voice captivated the hearts of many as the lead female singer of the iconic Ghanaian music group, Wulomei founded in 1973.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="body1"
                        style={{
                            maxWidth: '900px',
                            lineHeight: '1.8',
                            fontSize: '1.25rem',
                            textAlign: 'justify',
                            marginBottom: '1.5rem',
                        }}
                    >
                        In 1974, Wulomei embarked on a nationwide tour in Ghana, performing in various cities, including a memorable trip to Yaipe and Bolgatanga, where they crossed the Volta River on the Yaipe Queen. However, Naa Amanua's musical journey did not stop at Ghana's borders. She performed alongside Wulomei in Togo, the United States and the UK, sharing the rich cultural heritage of Ghana with the world.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="body1"
                        style={{
                            maxWidth: '900px',
                            lineHeight: '1.8',
                            fontSize: '1.25rem',
                            textAlign: 'justify',
                        }}
                    >
                        Naa Amanua later joined the Suku Troupe, whose debut album ‘Awo De Me’ became an instant hit. Her talents extended far beyond music as part of the Suku Troupe. They were a formidable force in theatre and dance, pushing boundaries.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Typography
                        variant="body1"
                        style={{
                            maxWidth: '900px',
                            lineHeight: '1.8',
                            fontSize: '1.25rem',
                            textAlign: 'justify',
                        }}
                    >
                        In 1978, the group embarked on an extensive West African tour, performing in Benin, Togo, Liberia, and Kenya. One of the highlights of their tour was a special performance for President Jomo Kenyatta in Kenya. Naa Amanua's passion for music has been the driving force behind her incredible journey. She has been performing to date, from the moment she discovered her love for music. Her hard work has paid off as she has won awards, including the prestigious Lifetime Achievement Award at the 2018 Vodafone Ghana Music Awards.
                    </Typography>
                </motion.div>
            </div>
            <Footer />
        </>

    );
};

export default About;
