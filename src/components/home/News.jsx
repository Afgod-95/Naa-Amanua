import React, { useEffect } from 'react';
import VGMA from '../../assets/PNG/VGMA.png';
import LOGHA from '../../assets/PNG/LOGHA.png'
import HOMOWO from '../../assets/PNG/HOMOWO.png'
import GradientButton from '../buttons/GradientButton';
import { Typography } from '@mui/material'; // Typography added for replacement
import { motion } from 'framer-motion'; // Import motion for animations
import { useMediaQuery } from 'react-responsive';
import OutlinedButton from '../buttons/OutlineButton';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { latestNews } from '../../utils/news-data/news';

const News = () => {
    // Mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const selectedNews = latestNews[0]; // Select the first news item

    const navigate = useNavigate();
   
    const handleNewsNavigate = () => {
        
        if (!selectedNews) {
            console.error("No news item available to navigate.");
            return;
        }
    
        navigate(`/news`, { state: { news: selectedNews } });
    };

    const seeAllNews = () => {
        navigate('/news/all');
    }
    
  
   
    //awards
    const awardImages = [
        VGMA,
        LOGHA,
        HOMOWO,
    ]

    return (
        <div
            id="news"
            style={{
                width: '100vw',
                maxHeight: '95vh',
                overflowX: 'hidden',
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
                        {awardImages.map((_, index) => (
                            <motion.img
                                key={index}
                                src={awardImages[index]}
                                alt=""
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'contain',
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
                            justifyContent: 'flex-start',
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
                               
                                fontSize: '18px',
                            }}
                        >
                            Latest
                            <span style={{ fontSize: '3rem' }}>News</span>
                        </Typography>

                        <Typography
                            style={{
                                width: '100%',
                                fontSize: '1.2rem',
                                color: '#fff',
                                fontWeight: '200',
                                color: 'white'
                            }}
                        >
                           {selectedNews.date }
                        </Typography>

                        <Typography
                            style={{
                                width: '100%',
                                maxWidth: isMobile ? '90%' : '70%',
                                textAlign: 'center',
                                fontSize: '1.2rem',
                                color: '#fff',
                                textTransform: 'capitalize',
                            }}
                        >
                            {selectedNews.title}
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
                            <OutlinedButton text={'Read more'} width={'80%'} onClick={(handleNewsNavigate)} />
                            <GradientButton text={'See All News'} width={'80%'} onClick={seeAllNews}/>
                        </motion.div>
                    </motion.div>
                </>
            ) : (
                <div
                    style={{
                        display: "flex",
                        alignContent: "center",
                        gap: '3rem',
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
                        {awardImages.map((_, index) => (
                            <motion.img
                                key={index}
                                src={awardImages[index]}
                                alt=""
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    objectFit: 'contain',
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
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: "flex-start",
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
                                fontSize: '25px',
                            }}
                        >
                            Latest
                            <span style={{ fontSize: '3rem' }}>News</span>
                        </Typography>

                        <Typography
                            style={{
                                width: '100%',
                                fontSize: '12px',
                                color: '#fff',
                                fontWeight: '200',
                                color: 'white'
                            }}
                        >
                           {latestNews[0].date}
                        </Typography>
                        <Typography
                            style={{
                                width: '100%',
                                maxWidth: '70%',
                                textAlign: 'left',
                                fontSize: '1.2rem',
                                color: '#fff',
                                textTransform: 'capitalize',
                            }}
                        >
                           {latestNews[0].title}
                        </Typography>

                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '1rem',
                                width: 'auto',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1 } }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            <OutlinedButton text={'Read More'} width={'100px'} onClick={handleNewsNavigate} />
                            <GradientButton text={'See All News'} width={'100px'} onClick={seeAllNews}  />
                        </motion.div>
                    </motion.div>
                </div>
            )}

        </div>
    );
};

export default News;
