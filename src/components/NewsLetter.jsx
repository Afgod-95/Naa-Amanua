import React from 'react';
import Button from './GradientButton';
import { TextField, Box, Typography } from '@mui/material'; // Added Typography import

const NewsLetter = () => {
    return (
        <div
            id="news-letter-signup"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                width: '100%',
                backgroundColor: '#fff',
                color: '#FFF',
            }}
        >
            <Typography variant="h4" style={{ marginBottom: '1rem', color: "#000", marginTop: "7rem" }}>
                Newsletter
            </Typography>
            <Typography variant="h5" style={{ fontSize: "2rem", color: "#AAAAAA" }}>
                Sign Up
            </Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: 'center',
                    padding: '1.5rem',
                }}
            >

                <TextField
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                    }}
                />

                <TextField
                    id="name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                    }}
                />

                <TextField
                    id="name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                    }}
                />
                <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", color: "#000", justifyContent: 'center', paddingTop: "1rem", gap: ".5rem" }}>
                    <p style={{ color: "#000", fontSize: "13px" }}>You can unsubscribe anytime. For more details, review our Privacy Policy</p>
                    <Button text={"Subscribe"} width="250px" />
                </div>

            </Box>
        </div>
    );
};

export default NewsLetter;
