import React, { useState } from 'react';
import NewsContainer from '../components/NewsContainer';
import { latestNews } from '../utils/news-data/singleNews';
import GradientButton from '../components/GradientButton';
import Footer from '../components/Footer';
import { Typography, Box, Pagination } from '@mui/material';
import { motion } from 'framer-motion';

const AllNews = () => {
    const itemsPerPage = 1; // Number of news items per page
    const [currentPage, setCurrentPage] = useState(1);

    // Total number of pages
    const totalPages = Math.ceil(latestNews.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Get the news items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = latestNews.slice(startIndex, endIndex);

    if (!latestNews || latestNews.length === 0) {
        return (
            <motion.div
                style={{
                    textAlign: 'center',
                    marginTop: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Typography variant="h5" color="error">
                    No news data available.
                </Typography>
                <GradientButton text="Back to Home" onClick={() => window.location.back()} />
            </motion.div>
        );
    }

    return (
        <div>
            {currentNews.map((news, index) => {
                const descriptions = news.descriptions || []; // Ensure descriptions is an array
                const [firstDescription, ...remainingDescriptions] = descriptions;

                return (
                    <NewsContainer
                        key={index}
                        title={news?.title}
                        img={news?.img || 'default-image-url.jpg'}
                        date={news?.date}
                        desc1={
                            firstDescription ? (
                                <b style={{ color: 'black' }}>{firstDescription}</b>
                            ) : null
                        }
                        desc2={
                            remainingDescriptions.length > 0
                                ? remainingDescriptions.map((desc, i) => (
                                    <Typography
                                        key={i}
                                        style={{ marginBottom: '1rem', color: 'black' }}
                                    >
                                        {desc}
                                    </Typography>
                                ))
                                : null
                        }
                        source={news.source || 'Unknown Source'}
                    />
                );
            })}


            {/* Pagination */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px 0',
                }}
            >
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>

            <Footer />
        </div>
    );
};

export default AllNews;