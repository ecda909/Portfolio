import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const skills = [
    { name: 'Python', percentage: 80 },
    { name: 'Javascript', percentage: 75 },
    { name: 'Kubernetes', percentage: 90 },
    { name: 'AWS', percentage: 90 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="animated-skills"
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
    >
      {skills.map((skill, index) => (
        <motion.div 
          key={skill.name}
          className="skill-item"
          variants={skillVariants}
        >
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
          <div className="skill-bar-container">
            <div className="skill-bar-background"></div>
            <motion.div 
              className="skill-bar-fill"
              variants={barVariants}
              custom={skill.percentage}
            ></motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedSkills;
