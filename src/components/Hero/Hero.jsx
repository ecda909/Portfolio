import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import PortfolioContext from '../../context/context';
import downloadFile from '../../../static/resume.pdf';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero">
      <Container>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="justify-content-center justify-content-lg-start">
            <Col lg={8} md={10} sm={12}>
              <motion.div variants={itemVariants}>
                <h4 className="hero-greeting">{title || 'Hi, my name is'}</h4>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className="hero-title">
                  {name || 'Eder Mazariegos'}.
                  <br />
                  <span className="hero-subtitle">{subtitle || 'Site Reliability Engineer'}</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="hero-description">
                  Motivated, experienced, detail-oriented Site Reliability Engineer (SRE) highly regarded for delivering professional,
                  elegant solutions to cloud-based application design.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="hero-cta">
                  <a href={downloadFile} className="btn-primary" download>
                    <FaDownload className="me-2" />
                    {cta || 'Download Resume'}
                  </a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
