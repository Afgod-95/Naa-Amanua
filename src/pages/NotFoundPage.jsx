import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GradientButton from "../components/buttons/GradientButton.jsx";

const NotFoundPage = () => {

  const navigate = useNavigate();
  // Animation Variants
  const bounce = {
    animate: {
      y: [0, -20, 0], 
      transition: {
        duration: 1, 
        repeat: Infinity, 
        repeatType: "loop", 
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8 },
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7fafc', 
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '6rem', 
    fontWeight: 'bold',
    color: '#000', 
    margin: 0,
  };

  const descriptionStyle = {
    marginTop: '1rem',
    fontSize: '1.25rem', 
    color: '#4a5568', 
  };

  const buttonContainerStyle = {
    marginTop: '2rem',
  };


  // Responsive styling for smaller screens
  const responsiveTitleStyle = {
    fontSize: '4rem', // Smaller size for smaller screens
  };

  return (
    <div style={containerStyle}>
      {/* Bouncing 404 */}
      <motion.h1
        style={{ ...titleStyle, ...responsiveTitleStyle }}
        variants={bounce}
        animate="animate"
      >
        404
      </motion.h1>

      {/* Description */}
      <motion.p
        style={descriptionStyle}
        {...fadeIn}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Button */}
      <motion.div style={buttonContainerStyle} {...fadeIn}>
       <GradientButton  text = "Go Back home" onClick={() => navigate('/')}  />
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
