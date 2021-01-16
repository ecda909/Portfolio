import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Vibecourt from '../../assets/vibecourt.svg'
import Kms from '../../assets/kms.svg'
import Blankcut from '../../assets/blankcut.svg'
import Title from '../Title/Title';


const Portfolio = () => {

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
    <section className="portfolio" id="portfolio">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} sm={12} className="portfolio-padding portfolio-text">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
              <Row className="justify-content-center justify-content-md-start justify-content-lg-start">
                <h1>
                  <span className="grey-text number-text">04.</span>
                  <Title title="My Portfolio" />
                </h1>
              </Row>
              <Row className="mt-5">
                <Col md={8} sm={8} className="ml-0 pl-0">
                  <p className="font-weight-light grey-text text-center text-md-left text-lg-left">
                    A list of the projects I have started and had a hand in helping create/build. 
                    Not all of the projects may be posted public on Github and firm work for the most part is confidential, 
                    but there is a more detailed overview of what they entail on my resume. 
                  </p>
                </Col>
              </Row>
              <Row className="mt-5 d-none d-sm-none d-md-inline d-lg-inline">
                <div className="d-flex">
                  <span className="orange" align="left">ALL</span>
                </div>
                {/* <div className="d-flex ml-5">
                  <Link to="/">Side Work</Link>
                </div>
                <div className="d-flex ml-5">
                  <Link to="/">Firm Projects</Link>
                </div> */}
              </Row>
              <Row className="mt-4">
                <Col className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline" align="left">
                  <Link to="https://www.vibecourt.com/">
                    <Vibecourt viewBox="0 0 1650 900" preserveAspectRatio="xMinYMin meet" />
                  </Link>
                </Col>
                <Col lg={4} md={4} sm={4} className="ml-0 pl-0">
                  <Row className="mt-5 mt-md-0 mt-lg-0">
                    <Col className="pr-0 mr-0">
                      <h4 className="grey-text float-md-right float-lg-right">Side Work</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-0 mr-0">
                      <h3 className="white-text float-md-right float-lg-right">Vibecourt Music</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-0 mr-0">
                      <span className="circle blink-green float-md-right float-lg-right" /><span className="green-text ml-4 ml-md-0 ml-lg-0 float-md-right float-lg-right">Live</span>
                    </Col>
                  </Row>
                  <Row className="mt-4 row d-flex justify-content-center ml-0 pl-md-0 pl-lg-0">
                    <div className="card card-right w-100 p-4 bg-dark-s shadow-lg position-static position-md-absolute position-lg-absolute">
                      <div className="card-body pl-0 pr-0 mr-0 pt-0 mt-0">
                        <p className="card-text white-text" align="right">Vibecourt is a Simple and Intuitive voting platform for music. Vibecourt is one of a kind and the albums on the site are ranked by your votes and your votes only.</p>
                      </div>
                    </div>
                  </Row>
                  <Row className="justify-content-end mt-3 tags-right d-none d-sm-none d-md-inline-flex d-lg-inline-flex float-right">
                    <div className="d-flex font-weight-light">
                      Python
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      AWS
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      JS
                    </div>
                  </Row>
                </Col>
              </Row>

              <Row className="row-p-padding">
                <Col md={4} sm={4} className="ml-0 pl-0">
                  <Row className="mt-5 mt-md-0 mt-lg-0">
                    <Col className="pr-0 mr-0">
                      <h4 className="grey-text float-md-right float-lg-left">Firm Work</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-0 mr-0">
                      <h3 className="white-text float-md-right float-lg-left">KMS (BAH)</h3>
                    </Col>
                  </Row>
                  <Row className="mt-4 d-flex justify-content-center ml-0 pl-md-0 pl-lg-0">
                    <div className="card card-left w-100 p-4 bg-dark-s shadow-lg position-static position-md-absolute position-lg-absolute">
                      <div className="card-body pl-0 pr-0 mr-0 pt-0 mt-0">
                        <p className="card-text white-text" align="left">The Knowledge Management System is an application built for clients to allow for efficient search and retrieval of sensitive data. The system is scalable to handle volumes in the > terabyte range and utilizes a data ingest pipeline to allow for smart categorization of datafiles through machine intelligence/learning, smart metadata retrieval, Optical Character Recognition, among other features.</p>
                      </div>
                    </div>
                  </Row>
                  <Row className="mt-3 tags-left d-none d-sm-none d-md-inline-flex d-lg-inline-flex float-left">
                    <div className="d-flex font-weight-light">
                      Angular
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      Node
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      Docker/Kubernetes
                    </div>
                  </Row>
                </Col>
                <Col className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline">
                  <a>
                    <Kms viewBox="0 0 1650 900" preserveAspectRatio="xMinYMin meet" />
                  </a>
                </Col>
              </Row>

              <Row className="row-p-padding">
                <Col className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline" align="left">
                  <Link to="https://github.com/ecda909">
                    <Blankcut viewBox="0 0 1650 900" preserveAspectRatio="xMinYMin meet" />
                  </Link>
                </Col>
                <Col md={4} sm={4} className="mt-5 ml-0 pl-0">
                  <Row>
                    <Col className="pr-0 mr-0">
                      <h4 className="grey-text float-md-right float-lg-right">Side Work</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-0 mr-0">
                      <h3 className="white-text float-md-right float-lg-right">Blank Cut</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-0 mr-0">
                      <span className="circle blink-orange float-md-right float-lg-right" /><span className="orange-text ml-4 ml-md-0 ml-lg-0 float-md-right float-lg-right">Under Development</span>
                    </Col>
                  </Row>
                  <Row className="mt-4 d-flex justify-content-center ml-0 pl-md-0 pl-lg-0">
                    <div className="card card-right w-100 p-4 bg-dark-s shadow-lg position-static position-md-absolute position-lg-absolute">
                      <div className="card-body pl-0 pr-0 mr-0 pt-0 mt-0">
                        <p className="card-text white-text" align="right">Blank Cut is a digital platform that provides people with tools and software for starting and running their businesses. This platform acts as a one-stop-shop for anyone looking to build a business.</p>
                      </div>
                    </div>
                  </Row>
                  <Row className="mt-3 tags-right d-none d-sm-none d-md-inline-flex d-lg-inline-flex float-right">
                    <div className="d-flex font-weight-light">
                      React
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      Node
                    </div>
                    <div className="d-flex ml-5 font-weight-light">
                      Kubernetes
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row className="source-code-padding">
                <Col>
                  <Link to="https://github.com/ecda909" className="cta-btn cta-btn--hero" data-toggle="tooltip" placement="top" title="Not all projects are public" smooth duration={1000}>
                    Source Code
                  </Link>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
