import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import AboutMe from '../assets/aboutme.svg';
import '../style/main.scss';

const AboutPage = () => {
  const { title, lang, description } = headData;

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'About - Eder Mazariegos'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Learn more about Eder Mazariegos - Site Reliability Engineer'} />
      </Helmet>
      <section className="about-story">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Navigation */}
            <Row className="justify-content-center">
              <Col lg={10} md={12} sm={12}>
                <motion.div variants={itemVariants} className="back-link">
                  <Link to="/" className="back-btn">
                    <FaArrowLeft className="me-2" />
                    Back to Home
                  </Link>
                </motion.div>
              </Col>
            </Row>

            {/* Article Header */}
            <Row className="justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <motion.div variants={itemVariants} className="article-header">
                  <h1 className="article-title">
                    My Story
                  </h1>
                  <p className="article-subtitle">
                    From curious student to Founder & CTO, building innovative solutions that make a difference.
                  </p>
                  <div className="article-meta">
                    <div className="author-info">
                      <div className="author-avatar">
                        <AboutMe viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" />
                      </div>
                      <div className="author-details">
                        <span className="author-name">Eder Mazariegos</span>
                        <span className="author-title">Founder & CTO, Blank Cut Inc.</span>
                      </div>
                    </div>
                    <div className="article-actions">
                      <a href="/resume.pdf" className="cta-btn cta-btn--resume" download>
                        <FaDownload className="me-2" />
                        Download Resume
                      </a>
                      <div className="social-links">
                        <a href="https://linkedin.com/in/eder-mazariegos-6a97b757" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                        <a href="https://github.com/ecda909" target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                        <a href="https://twitter.com/eder_mazariegos" target="_blank" rel="noopener noreferrer">
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>

            {/* Article Content */}
            <Row className="justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <motion.div variants={itemVariants} className="article-content">
                  <div className="article-section">
                    <h2 className="section-heading">
                      <FaGraduationCap className="section-icon" />
                      Education & Early Days
                    </h2>
                    <p className="article-paragraph">
                      I graduated from the University of Central Florida in 2018 with a degree in Computer Science.
                      My journey in technology began during my college years when I discovered my passion for solving
                      complex problems through code. What started as curiosity about how websites work evolved into a
                      deep understanding of full-stack development, cloud infrastructure, and system reliability.
                    </p>
                    <p className="article-paragraph">
                      During my time at UCF, I immersed myself in various programming languages and frameworks,
                      constantly seeking opportunities to apply theoretical knowledge to real-world problems.
                      This foundation would prove invaluable as I transitioned into the professional world.
                    </p>
                  </div>

                  <div className="article-section">
                    <h2 className="section-heading">
                      <FaBriefcase className="section-icon" />
                      Professional Growth
                    </h2>
                    <p className="article-paragraph">
                      Shortly after graduation, I joined the Fortune 500 consulting firm Booz Allen Hamilton (BAH).
                      At Booz Allen, I've built and worked on new, innovative, and impactful projects related to the
                      Department of Defense. I've played a lead role in DevOps engineering, web development, and Cloud
                      Architecture, making a name for myself within the firm as a DevOps engineer and Solutions Architect.
                    </p>
                    <p className="article-paragraph">
                      My experience at BAH exposed me to enterprise-scale challenges and taught me the importance of
                      building robust, secure, and scalable systems. Working with government clients required a deep
                      understanding of compliance, security protocols, and the ability to deliver mission-critical solutions.
                    </p>
                  </div>

                  <div className="article-section">
                    <h2 className="section-heading">
                      <FaCode className="section-icon" />
                      Entrepreneurial Journey
                    </h2>
                    <p className="article-paragraph">
                      Building on my experience in enterprise environments, I founded Blank Cut Inc. with a vision to
                      create innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
                      As Founder & CTO, I lead the development of platforms that leverage AI, cloud infrastructure, and
                      modern software engineering practices.
                    </p>
                    <p className="article-paragraph">
                      Our projects at Blank Cut Inc. span from AI-powered infrastructure management tools like KubeAgent
                      to cloud-native deployment platforms like DropASite, and health technology solutions that use machine
                      learning for predictive analytics. Each project represents our commitment to solving complex problems
                      through innovative technology.
                    </p>
                  </div>

                  <div className="article-section">
                    <h2 className="section-heading">
                      <FaHeart className="section-icon" />
                      Philosophy & Vision
                    </h2>
                    <p className="article-paragraph">
                      I believe that technology should serve humanity, not the other way around. My approach to building
                      software focuses on creating solutions that are not only technically excellent but also genuinely
                      useful and accessible. Whether it's simplifying Kubernetes management or making website deployment
                      effortless, the goal is always to reduce complexity and empower users.
                    </p>
                    <blockquote className="article-quote">
                      "The people who are crazy enough to think they can change the world are the ones who do."
                      <cite>- Steve Jobs</cite>
                    </blockquote>
                    <p className="article-paragraph">
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                      or sharing knowledge through technical writing. I believe in continuous learning and staying current
                      with emerging technologies to deliver the best solutions for tomorrow's challenges.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>

            {/* Article Footer */}
            <Row className="justify-content-center">
              <Col lg={8} md={10} sm={12}>
                <motion.div variants={itemVariants} className="article-footer">
                  <div className="article-cta">
                    <h3 className="cta-title">Let's Connect</h3>
                    <p className="cta-description">
                      I'm always interested in discussing new opportunities, sharing knowledge,
                      or collaborating on exciting projects.
                    </p>
                    <div className="cta-actions">
                      <Link to="/#contact" className="cta-btn cta-btn--hero">
                        Get In Touch
                      </Link>
                      <Link to="/projects" className="cta-btn cta-btn--resume">
                        View My Projects
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
