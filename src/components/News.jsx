import React from 'react';
import AwardImage from '../assets/PNG/award.png';
import GradientButton from './GradientButton';
import { Typography } from '@mui/material'; // Typography added for replacement
import { motion } from 'framer-motion'; // Import motion for animations
import { useMediaQuery } from 'react-responsive';
import OutlinedButton from './OutlineButton';

const News = () => {
    // Mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div
            id="news"
            style={{
                width: '100vw',
                minHeight: '90vh',
                overflowX: 'hidden', // Prevent horizontal overflow
                padding: isMobile ? '1rem' : '2rem',
                boxSizing: 'border-box',
            }}
        >


            {isMobile ? (
                <>
                    {/* Images Section */}
                    <motion.div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '.5rem',
                            paddingBottom: "3rem"
                        }}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {[...Array(3)].map((_, index) => (
                            <motion.img
                                key={index}
                                src={AwardImage}
                                alt=""
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                                viewport={{ once: false, amount: 0.5 }}
                            />
                        ))}
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        style={{
                            width: '100%',
                            margin: '0 auto',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Typography
                            variant="h2"
                            style={{
                                color: '#fff',
                                textTransform: 'capitalize',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            Latest
                            <span style={{ fontSize: '3rem' }}>News</span>
                        </Typography>
                        <Typography
                            style={{
                                width: '100%',
                                maxWidth: isMobile ? '90%' : '70%',
                                textAlign: 'center',
                                fontSize: '1.2rem',
                                color: '#fff',
                            }}
                        >
                            <span>Legend! </span>
                            Naa Amanua of Wulomei Group Is 2018 VGMA Lifetime Achievement Honoree
                        </Typography>

                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                                paddingBottom: '1rem',
                                width: '100%',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <OutlinedButton text={'Read more'} width={'80%'} />
                            <GradientButton text={'See All News'} width={'80%'} />
                        </motion.div>
                    </motion.div>
                </>
            ) : (
                <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        width: "80%",
                        margin: "0% auto",
                        padding: "2rem"

                    }}
                >
                    {/* Images Section */}
                    <motion.div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {[...Array(3)].map((_, index) => (
                            <motion.img
                                key={index}
                                src={AwardImage}
                                alt=""
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    objectFit: 'cover',
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                                viewport={{ once: false, amount: 0.5 }}
                            />
                        ))}
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        style={{
                            width: '50%',
                            margin: '0',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Typography
                            variant="h2"
                            style={{
                                color: '#fff',
                                textTransform: 'capitalize',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }}
                        >
                            Latest
                            <span style={{ fontSize: '3rem' }}>News</span>
                        </Typography>
                        <Typography
                            style={{
                                width: '100%',
                                maxWidth: '70%',
                                textAlign: 'center',
                                fontSize: '1.2rem',
                                color: '#fff',
                            }}
                        >
                            <span>Legend! </span>
                            Naa Amanua of Wulomei Group Is 2018 VGMA Lifetime Achievement Honoree
                        </Typography>

                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                                width: 'auto',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <OutlinedButton text={'Read More'} width={'200px'} />
                            <GradientButton text={'See All News'} width={'200px'} />
                        </motion.div>
                    </motion.div>
                </div>
            )}

        </div>
    );
};

export default News;
