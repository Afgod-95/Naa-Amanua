import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const NewsContainer = ({ title, img, date, desc1, desc2, source }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const navigate = useNavigate();

    const styles = {
        backBtn: {
            position: 'fixed',
            top: isMobile ? '10px' : '40px',
            left: isMobile ? '10px' : '40px',
            fontSize: '24px',
            cursor: 'pointer',
            display: 'flex',
            zIndex: 1000,
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '40px' : '60px',
            height: isMobile ? '40px' : '60px',
            backgroundColor: 'rgba(0, 0, 0)',
        },
    };

    return (
        <>
            <div style={{ width: isMobile ?  '80%' : "50%", margin: '5% auto', overflow: "hidden" }}>
                <motion.div
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, damping: 10 }}
                    style={styles.backBtn}
                    aria-label="Go back"
                >
                    <IoReturnUpBack size={isMobile ? 24 : 32} color="#fff" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                    style={{paddingTop: "2rem"}}
                >
                    <Typography variant="h3" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', paddingBottom: '1rem', color: "#5F6364" }}>
                       Posted: {date} | 2mins read
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    viewport={{ once: false, amount: 0.5 }}
                    style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '1rem' }}
                >
                    <img
                        src={img}
                        alt={title || 'News Image'}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '2rem', marginBottom: "1rem", textAlign: "justify" }}>
                        {desc1}
                    </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
                    {Array.isArray(desc2) ? (
                        desc2.map((desc, idx) => (
                            <Typography key={idx} variant="body1" style={{ marginBottom: '1rem', textAlign: "justify" }}>
                                {desc}
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body1" style={{ marginTop: '2rem' }}>
                            {desc2}
                        </Typography>
                    )}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
                    <Typography variant="body1" style={{ color: 'blue', fontSize: '12px' }}>

                       <span style={{color: "#5F6364", textTransform: 'capitalize'}}>Source:</span> {source}

                    </Typography>
                </motion.div>
            </div>
        </>
    );
};

export default NewsContainer;
