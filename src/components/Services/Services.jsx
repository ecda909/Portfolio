import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Python from '../../assets/python.svg';
import Docker from '../../assets/docker.svg';
import Javascript from '../../assets/javascript.svg';
import PHP from '../../assets/php.svg';
import Kubernetes from '../../assets/kubernetes.svg';
import Reaction from '../../assets/reaction.svg';
import Css3 from '../../assets/css3.svg';
import Mysql from '../../assets/mysql.svg';
import Postgres from '../../assets/postgres.svg';
import Nginx from '../../assets/nginx.svg';
import Jenkins from '../../assets/jenkins.svg';
import Fullstack from '../../assets/fullstack.svg';
import Linux from '../../assets/linux.svg';
import Next from '../../assets/next.svg';
import Html from '../../assets/html5.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import Gatsby from '../../assets/gatsby.svg';
import Redhat from '../../assets/redhat.svg';
import Aws from '../../assets/aws.svg';
import Gcloud from '../../assets/gcloud.svg';
import Title from '../Title/Title';

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

const Experience = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOn, toggleIsOn] = useToggle();

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
    <section className="services" id="services">
      <Container>
        {/* <Title title="Experience" /> */}
        <Row className="justify-content-center">
          <Col md={9} sm={12} className="service-padding services-text">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Row className="justify-content-center justify-content-md-start justify-content-lg-start">
                <h1>
                  <span className="grey-text number-text">03.</span>
                  <Title title="My Services" />
                </h1>
              </Row>
              <Row className="mt-5">
                <Col md={8} sm={8} className="ml-0 pl-md-0 pl-lg-0">
                  <p className="font-weight-light grey-text text-center text-md-left text-lg-left">
                    A list of different services/skills I have offered to clients and contributed to
                    projects. I have used a wide variety of languages and worked with quite a few
                    tech stacks over the years, so the list below may not accurately reflect
                    everything I have worked with/used.
                  </p>
                </Col>
              </Row>
              <Row className="mt-5 justify-content-center">
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg pt-0 mt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <Python viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>Python</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg mt-0 pt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <PHP viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>PHP</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg mt-0 pt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <Javascript viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>Javascript</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg mt-0 pt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <Docker viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>Docker</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg mt-0 pt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <Kubernetes viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>K8s</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col
                  md={4}
                  sm={4}
                  className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
                >
                  <Link smooth duration={1000}>
                    <div className="card bg-dark-s shadow-lg mt-0 pt-0">
                      <div className="row">
                        <div className="col-4 pr-0 mr-0">
                          <Reaction viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                        </div>
                        <div className="col-5 services-title ml-0 pl-0" align="left">
                          <span>React</span>
                        </div>
                        {/* <div className="col-3 services-icon ml-0 pl-0">
                          <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
                        </div> */}
                      </div>
                    </div>
                  </Link>
                </Col>
                {isOn ? <Results /> : null}
              </Row>
              <Row className="mt-5 justify-content-center">
                <button
                  className="cta-btn cta-btn--hero"
                  smooth
                  duration={1000}
                  onClick={toggleIsOn}
                >
                  View All
                </button>
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Results = () => (
  <>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={200} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Css3 viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>CSS3</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={300} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Mysql viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>MYSQL</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={400} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Postgres viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Postgres</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={500} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Nginx viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>NGINX</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={600} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Jenkins viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Jenkins</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={700} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Fullstack viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Full-Stack</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={800} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Linux viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Linux</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={900} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Next viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Next JS</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1000} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Html viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>HTML5</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1100} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Bootstrap viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Bootstrap</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1200} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Gatsby viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Gatsby</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1300} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Redhat viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>Redhat</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1400} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Aws viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>AWS</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
    <Col
      md={4}
      sm={4}
      className="ml-0 pl-md-0 pl-lg-0 mt-5 d-flex justify-content-center justify-content-md-start justify-content-lg-start"
    >
      <Fade duration={1000} delay={1500} distance="30px">
        <Link smooth duration={1000}>
          <div className="card bg-dark-s shadow-lg mt-0 pt-0">
            <div className="row">
              <div className="col-4 pr-0 mr-0">
                <Gcloud viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
              </div>
              <div className="col-5 services-title ml-0 pl-0" align="left">
                <span>GCP</span>
              </div>
              {/* <div className="col-3 services-icon ml-0 pl-0">
                <Arrow viewBox="-100 -50 450 300" preserveAspectRatio="xMinYMin meet" />
              </div> */}
            </div>
          </div>
        </Link>
      </Fade>
    </Col>
  </>
);

export default Experience;
