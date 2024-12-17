import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GradientButton from '../buttons/GradientButton.jsx';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
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
          Mary Naa Amanua Dodoo, popularly known as Naa Amanua, is a Ghanaian music legend who has been serenading audiences with her folklore music for decades. Her soulful voice captivated the hearts of many as the lead female singer of the iconic Ghanaian music group, Wulomei founded in 1973...
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <GradientButton text={"Read more"} onClick={() => navigate('/about')} />
      </motion.div>
    </div>
  );
};

export default About;
