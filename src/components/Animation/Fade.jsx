import React from 'react';
import { motion } from 'framer-motion';

const Fade = ({ 
  children, 
  left = false, 
  right = false, 
  bottom = false, 
  top = false,
  duration = 1,
  delay = 0,
  distance = "30px",
  ...props 
}) => {
  // Convert distance to number if it's a string with 'px'
  const distanceValue = typeof distance === 'string' 
    ? parseInt(distance.replace('px', '')) 
    : distance;

  // Determine initial position based on direction
  let initial = { opacity: 0 };
  
  if (left) {
    initial.x = -distanceValue;
  } else if (right) {
    initial.x = distanceValue;
  } else if (bottom) {
    initial.y = distanceValue;
  } else if (top) {
    initial.y = -distanceValue;
  }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = {
    duration: duration / 1000, // Convert to seconds
    delay: delay / 1000, // Convert to seconds
    ease: "easeOut",
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.1 }}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
