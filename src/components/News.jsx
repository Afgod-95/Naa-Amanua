import React from 'react';
import AwardImage from '../assets/PNG/award.png';
import Button from './GradientButton';
import { Typography } from '@mui/material'; // Typography added for replacement
import { motion } from 'framer-motion'; // Import motion for animations

const News = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: "2rem",
                width: "80%",
                margin: "0% auto",
                height: '100%',
            }}
        >
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
                <motion.img
                    src={AwardImage} alt=""
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                />
            </motion.div>

            <motion.div
                style={{
                    width: "50%",
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
                <p style={{ width: "50%", textAlign: "center", alignSelf: "center" }}>
                    <span>Legend! </span>
                    Naa Amanua of Wulomei Group Is 2018 VGMA Lifetime Achievement Honoree
                </p>

                <motion.div
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Button text={"Read more"} width={"200px"} />
                    <Button text={"Read more"} width={"200px"} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default News;
