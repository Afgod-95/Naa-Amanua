import React from 'react';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NewsContainer from '../components/NewsContainer';
import { motion } from 'framer-motion';

const News = () => {
    const location = useLocation();

    // Safely retrieve the news state
    const news = location?.state?.news
    console.log(news?.title)

    console.log("News Data:", news);

    if (!news) {
        return (
            <motion.div style={{ textAlign: 'center', marginTop: '50px', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Typography variant="h5" color="error">
                    No news data available.
                </Typography>
                <GradientButton text="Back to Home" onClick={() => { window.location.back() }} />
            </motion.div>
        );
    }

    // Extract descriptions
    const [firstDescription, ...remainingDescriptions] = news.descriptions || [];

    return (
        <>
            <NewsContainer
                title={news?.title}
                img={news?.img || "default-image-url.jpg"} // Ensure `img` is properly passed or fallback
                date={news?.date}
                desc1={
                    firstDescription ? (
                        <b style={{ color: "black" }}>{firstDescription}</b>
                    ) : null
                }
                desc2={
                    remainingDescriptions.length > 0 ? (
                        remainingDescriptions.map((desc, i) => (
                            <Typography key={i} style={{ marginBottom: '1rem', color: "black" }}>
                                {desc}
                            </Typography>
                        ))
                    ) : null
                }
                source={news.source || "Unknown Source"} // Fallback source
            />
            <Footer />
        </>
    );
};

export default News;
