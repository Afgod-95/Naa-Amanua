import React from 'react';
import AwardImage from '../assets/PNG/award.png';
import GradientButton from './GradientButton';
import { Typography } from '@mui/material'; // Typography added for replacement
import { motion } from 'framer-motion'; // Import motion for animations
import { useMediaQuery } from 'react-responsive';
import OutlinedButton from './OutlineButton';
const News = () => {

    //mobile media query
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isMobile ? "column" : "row",
                justifyContent: 'flex-start',
                justifyItems: "center",
                alignItems: 'center',
                gap: "2rem",
                padding: "0rem 2rem 2rem 0rem",
                width: isMobile ? "100%" : "80%",
                margin: "0% auto",
            }}
        >
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? "row" : 'column',
                    justifyContent: "center",
                    alignItems: isMobile ? "center" : ""
                }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width:  isMobile ? "110px" : '200px',
                        height: isMobile ? "110px" : '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width:  isMobile ? "110px" : '200px',
                        height: isMobile ? "110px" : '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width:  isMobile ? "110px" : '200px',
                        height: isMobile ? "110px" : '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
            </motion.div>

            <motion.div
                style={{
                    width: isMobile ? "90%" : "50%",
                    margin: isMobile && "0% auto",
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <Typography variant="h2" style={{ color: "#fff", textTransform: "capitalize", display: "flex", flexDirection: "column", textAlign: "center", }}>
                    Latest
                    <span style={{ fontSize: "3rem" }}>News</span>
                </Typography>
                <Typography style={{ width: isMobile ? "100%" : "50%", textAlign: "center", alignSelf: "center", fontSize: "1.2rem", color: "#fff", }}>
                    <span>Legend! </span>
                    Naa Amanua of Wulomei Group Is 2018 VGMA Lifetime Achievement Honoree
                </Typography>

                <motion.div
                    style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "center", alignItems: "center", gap: "2rem", width: isMobile && "100%"}}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <OutlinedButton text={"Read more"} width={ isMobile ? "80%" : "200px"} />
                    <GradientButton  text={"Read more"} width={isMobile ? "80%" : "200px" } />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default News;
