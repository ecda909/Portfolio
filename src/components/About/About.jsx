import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import AboutMe from '../../assets/aboutme.svg';
import Skills from '../../assets/skills.svg';
import Title from '../Title/Title';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <Row>
          <Col className="d-none d-sm-none d-md-inline d-lg-inline" sm={12} md={6}>
            <Fade bottom duration={1000} delay={400} distance="30px">
              <div className="svg-container">
                <AboutMe viewBox="0 0 300 400" preserveAspectRatio="xMinYMin meet" />
              </div>
            </Fade>
          </Col>
          <Col className="about-text about-padding" sm={12} md={6} lg={6}>
            <Row className="justify-content-center justify-content-md-start justify-content-lg-start">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="30px">
                <h1>
                  <span className="grey-text number-text">01.</span>
                  <Title title="About Me" />
                </h1>
              </Fade>
            </Row>
            <Row className="mt-5 mt-md-3 mt-lg-3">
              <Col className="ml-md-0 ml-lg-0 pl-md-0 pl-lg-0" sm={12} md={12} lg={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={900}
                  distance="30px"
                >
                  <p className="font-weight-light grey-text text-center text-md-left text-lg-left">
                  I graduated from the University of Central Florida in 2018. Shortly thereafter, I 
                  joined the Fortune 500 consultant firm Booz Allen Hamilton (BAH). At Booz Allen, 
                  I've built and worked on new, innovative, and impactful projects related to the DOD. 
                  I've played a lead role in DevOps engineering, web development, and Cloud Architecture. 
                  As well as making a name for myself and work within the firm as a DevOps engineer and 
                  Solutions Architect.
                  </p>
                </Fade>
              </Col>
            </Row>
            <Row className="justify-content-center justify-content-md-end justify-content-lg-end mt-3 mt-md-0 mt-lg-0 mb-0">
              <Fade bottom duration={1000} delay={400} distance="30px">
                <span className="readmore" align="right">
                  <LinkTo to="/about" smooth duration={1000}>
                    Read more...
                  </LinkTo>
                </span>
              </Fade>
            </Row>
            <Row className="mt-0 justify-content-center justify-content-md-start justify-content-lg-start">
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="30px">
                <Skills width="330" height="140" />
              </Fade>
            </Row>
            <Row className="mt-5 justify-content-center justify-content-md-start justify-content-lg-start">
              <Fade bottom duration={1000} delay={400} distance="30px">
                <Link to="contact" smooth duration={1000}>
                  <span className="cta-btn cta-btn--hero">Get in touch</span>
                </Link>
              </Fade>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
