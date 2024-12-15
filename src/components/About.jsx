import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';  // Import motion for animations

const About = () => {
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
          Mary Naa Amanua Dodoo, popularly known as Naa Amanua, is a folklore music singer and songwriter. She was the lead female singer for Wulomei, a renowned Ghanaian music group founded in 1973.
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
          In 1974, they toured Ghana, including crossing the Volta on the Yaipe Queen to Yaipe and then to Bolgatanga. Taking their music beyond the shores of Ghana, the group traveled to Togo to perform. They also performed in the United States and the UK.
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
          Naa Amanua later left Wulomei to join the Suku Troupe, whose first album, <em>Awo De Me</em>, was a big hit. The Suku Troupe afforded Naa Amanua the opportunity to give the world a little more than just music. They were a force to reckon with in the theatre and dance arenas, too. In 1978, they toured Benin, Togo, and Liberia in West Africa and visited Kenya, where they performed for President Jomo Kenyatta.
        </Typography>
      </motion.div>
    </div>
  );
};

export default About;
