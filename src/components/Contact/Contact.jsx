import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Phone from '../../assets/phone.svg'
import Mail from '../../assets/mail_footer.svg'
import Location from '../../assets/location.svg'
import Git from '../../assets/git.svg';
import Instagram from '../../assets/instagram.svg';

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={5} lg={5} className="contact-text offset-md-1 offset-lg-1">
            <Row className="justify-content-center justify-content-md-start justify-content-lg-start">
              <Link to="https://github.com/ecda909">
                <h1 className="font-weight-light">Contact Me</h1>
              </Link>
            </Row>
            <Row className="justify-content-center justify-content-center justify-content-md-start justify-content-lg-start">
              <p className="grey-text justify-content-center" align="left">Let's make something different, new, and meaningful.</p>
            </Row>
            <Row className="justify-content-start mt-4">
              <Col lg={1} md={1} sm={12} className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline">
                <a href="tel:352-286-9493">
                  <Phone width="180px" height="50px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin meet" />
                </a>
              </Col>
              <Col>
                <span className="white-text font-weight-light grey-text float-md-left float-lg-left">Call</span><br />
                <a href="tel:352-286-9493">
                  <span className="sub-text float-md-left float-lg-left">+3522869493</span>
                </a>
              </Col>
            </Row>
            <Row className="justify-content-start mt-4">
              <Col lg={1} md={1} sm={12} className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline">
                <a href='mailto:ecda909@gmail.com'>
                  <Mail width="180px" height="50px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin meet" />
                </a>
              </Col>
              <Col>
                <span className="white-text font-weight-light grey-text float-md-left float-lg-left">Email</span><br />
                <a href='mailto:ecda909@gmail.com'>
                  <span className="sub-text float-md-left float-lg-left">ecda909@gmail.com</span>
                </a>
              </Col>
            </Row>
            <Row className="justify-content-start mt-4">
              <Col lg={1} md={1} sm={12} className="ml-0 pl-0 d-none d-sm-none d-md-inline d-lg-inline">
                <Link to="https://goo.gl/maps/BmKQtRB3yXGA5P1PA">
                  <Location width="180px" height="50px" viewBox="100 100 300 300" preserveAspectRatio="xMinYMin meet" />
                </Link>
              </Col>
              <Col>
                <span className="white-text font-weight-light grey-text float-md-left float-lg-left">Location</span><br />
                <Link to="https://goo.gl/maps/BmKQtRB3yXGA5P1PA">
                  <span className="sub-text float-md-left float-lg-left">Washington, DC</span>
                </Link>
              </Col>
            </Row>
            <Row className="mt-5 d-none d-sm-none d-md-block d-lg-block" align="left">
              <h4 className="grey-text">Find Me on</h4><br />
            </Row>
            <Row className="d-none d-sm-none d-md-block d-lg-block">
              <Col className="ml-0 pl-0" sm={12} md={4} lg={4} align="left">
                <Row>
                  <Col sm={4} md={4} lg={4}>
                    <Link to="https://github.com/ecda909">
                      <Git width="180px" height="50px" viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                    </Link>
                  </Col>
                  <Col sm={4} md={4} lg={4} className="mt-0 mt-md-3 mt-lg-3">
                    <Link to="https://www.linkedin.com/in/eder-mazariegos-6a97b757">
                      <i className="fa fa-linkedin fa-inverse fa-2x" />
                    </Link>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <Link to="https://www.instagram.com/eder_mazariegos_jr/">
                      <Instagram width="180px" height="50px" viewBox="80 30 300 300" preserveAspectRatio="xMinYMin meet" />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={5} lg={5} className="contact-text contact-form-padding">
            <Row className="justify-content-start">
              <Col align="left">
                <h1 className="white-text font-weight-light">Drop a Line</h1>
              </Col>
            </Row>
            <Row className="mt-3 justify-content-center">
              <Col>
                <form className="contactForm" action="https://formspree.io/f/xpzokapd" method="POST">
                  <input id="csrf_token" name="csrf_token" type="hidden" />
                  <div className="form-group">
                    <div className="form-row">
                      <Col>
                        <input className="form-control" id="name" name="name" required="" type="text" placeholder="Name" />
                      </Col>
                      <Col>
                        <input className="form-control" id="email" name="email" required="" type="text" placeholder="Email" />
                      </Col>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <Col>
                        <input className="form-control" id="phone" name="phone" required="" type="text" placeholder="Phone" />
                      </Col>
                      <Col>
                        <input className="form-control" id="subject" name="subject" required="" type="text" placeholder="Subject" />
                      </Col>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="message" name="message" required="" placeholder="Message" />
                  </div>
                  <input className="cta-btn cta-btn--hero mb-5 mt-3" id="submit" name="submit" type="submit" value="Submit" />
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
