import React from 'react';
import Button from './GradientButton';
import { useMediaQuery } from 'react-responsive';
import { Skeleton, Typography } from '@mui/material'; 
import { motion } from 'framer-motion'; // Import motion for animations

const FeaturedVideo = () => {
  // Update Video to include a valid YouTube video ID
  const Video = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Example Video ID
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div id='video'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
        backgroundColor: '#1E1E1E',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: "3rem",
          alignItems: 'center',
          width: '80%',
          margin: '0 auto',
        }}
      >
        {/* Animate the first div containing the text and button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Typography variant="h2" style={{ color: 'white', marginBottom: '1rem', display: 'flex', flexDirection: "column" }}>
            Featured
            <span style={{ fontSize: "50px" }}>Video</span>
          </Typography>

          <div style={{ paddingLeft: "4rem" }}>
            <Button text="Discover more Videos" />
          </div>
        </motion.div>

        {/* Animate the iframe or Skeleton */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {Video ? (
            <iframe
              width="720"
              height="400"
              src={`${Video}?autoplay=1&mute=1`} 
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                objectFit: 'cover',
                borderRadius: isMobile ? '' : '1rem',
              }}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                width: '720px',
                height: '400px',
                borderRadius: '1rem',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
