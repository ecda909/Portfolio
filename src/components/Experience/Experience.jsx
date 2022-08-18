import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Experience = () => {
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
    <section className="experience" id="experience">
      <Container>
        {/* <Title title="Experience" /> */}
        <Row className="about-wrapper justify-content-center">
          <Col md={9} sm={12} className="experience-padding experience-text">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Row className="justify-content-center justify-content-md-start justify-content-lg-start">
                <h1>
                  <span className="grey-text number-text">02.</span>
                  <Title title="Experience" />
                </h1>
              </Row>
              <Row className="mt-5">
                <Col md={8} sm={8} className="ml-0 pl-md-0 pl-lg-0">
                  <p className="font-weight-light grey-text text-center text-md-left text-lg-left">
                    A numerical list of my accomplishments, awards, projects, and years of
                    experience to date.
                  </p>
                </Col>
              </Row>
              <Row className="mt-5 justify-content-center">
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  className="ml-0 pl-0 mt-5 mt-md-0 mt-lg-0 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <div className="card bg-dark-e shadow-lg">
                    <span className="card-text card-text-e font-weight-bold mt-3">1</span>
                    <span className="card-text card-text-e-s">Startup (In Progress)</span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  className="ml-0 pl-0 mt-5 mt-md-0 mt-lg-0 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <div className="card bg-dark-e shadow-lg">
                    <span className="card-text card-text-e font-weight-bold mt-3">2</span>
                    <span className="card-text card-text-e-s">Awards</span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  className="ml-0 pl-0 mt-5 mt-md-0 mt-lg-0 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <div className="card bg-orange-e shadow-lg">
                    <span className="card-text card-text-e font-weight-bold mt-3">11+</span>
                    <span className="card-text card-text-e-s">Projects</span>
                  </div>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={12}
                  className="ml-0 pl-0 mt-5 mt-md-0 mt-lg-0 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <div className="card bg-dark-e shadow-lg">
                    <span className="card-text card-text-e font-weight-bold mt-3">04+</span>
                    <span className="card-text card-text-e-s">Years Experience</span>
                  </div>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
