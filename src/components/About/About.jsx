import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import PortfolioContext from '../../context/context';
import AboutMe from '../../assets/aboutme.svg';
import AnimatedSkills from './AnimatedSkills';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    }
  }, []);

  if (!about) return null;

  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="align-items-center">
            {/* About Image */}
            <Col lg={6} md={6} sm={12} className="about-image-col">
              <motion.div variants={imageVariants} className="about-image">
                <AboutMe viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" />
              </motion.div>
            </Col>

            {/* About Content */}
            <Col lg={6} md={6} sm={12} className="about-content">
              <motion.div variants={itemVariants}>
                <h1 className="about-title">
                  <span className="number-text">01.</span>
                  <Title title="About Me" />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="about-text">
                <p>{paragraphOne}</p>
                {paragraphTwo && <p>{paragraphTwo}</p>}
                {paragraphThree && <p>{paragraphThree}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="about-skills">
                <h4>Technologies I work with:</h4>
                <AnimatedSkills />
              </motion.div>

              <motion.div variants={itemVariants} className="about-actions">
                <div className="action-buttons">
                  {resume && (
                    <a
                      href={resume}
                      className="btn-primary"
                      download
                    >
                      <FaDownload className="me-2" />
                      Download Resume
                    </a>
                  )}
                  <Link to="contact" smooth duration={500}>
                    <Button className="btn-secondary">
                      Get In Touch
                      <FaArrowRight className="ms-2" />
                    </Button>
                  </Link>
                </div>

                <div className="read-more">
                  <LinkTo to="/about">
                    Read my full story <FaArrowRight className="ms-1" />
                  </LinkTo>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
