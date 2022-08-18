import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="about me" />
      </Helmet>
      <section className="about-story">
        <Container>
          <Row className="justify-content-center">
            <Fade bottom duration={1000} delay={300} distance="30px">
              <h1 className="hero-title text-center">
                About Me{' '}
                <span role="img" aria-label="emoji">
                  <i className="fa far fa-address-card orange" aria-hidden="true" />
                </span>
              </h1>
            </Fade>
          </Row>
          <Row className="justify-content-center mb-5">
            <Col sm={12} md={2} lg={2}>
              <hr />
            </Col>
          </Row>
          <Fade bottom duration={1000} delay={300} distance="30px">
            <Row className="justify-content-center mb-5">
              <Col sm={12} md={8} lg={8}>
                <p className="lead" align="left">
                  I graduated from the University of Central Florida in 2018. Shortly thereafter, 
                  I joined the Fortune 500 consultant firm Booz Allen Hamilton (BAH). At Booz Allen, 
                  I've built and worked on new, innovative, and impactful projects related to the DOD. 
                  I've played a lead role in DevOps engineering, web development, and Cloud Architecture. 
                  As well as making a name for myself and work within the firm as a DevOps engineer and 
                  Solutions Architect. 
                  <br />
                  <br />
                  Leading and using my skills to help others at large is what I'm passionate about. In 
                  my personal project (Blank Cut) I seek to provide people with tools to help them build 
                  a better business. At Booz Allen, I've worked on projects that benefit and hugely impact 
                  our society every day. I work with clubs to help teach others about data science, 
                  web development, and emerging technologies and continue to do so in the wake of a pandemic. 
                  It's through these and other projects that I make a change and strive to help others accomplish 
                  their goals and live a better life. 
                  <br />
                  <br />
                  In both my work within the firm and at home, I always seek to achieve excellence for my clients 
                  and myself. I take on hard work because I know it will make me a more skilled developer in the end. 
                  I teach myself new and emerging technologies and lean on others to confirm and diversify my point of 
                  view on the work I engage within. I always hold firm the belief that the people I work with have a 
                  profound impact on my life and I on there's. It is with this very understanding, I seek to provide 
                  world-class quality in the work I do and always keep others' expectations in mind.
                  <br />
                  <br />
                  "The people who are crazy enough to think they can change the world are the ones who do." - Steve Jobs
                </p>
              </Col>
            </Row>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <span className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </span>
          </Fade>
        </Container>
      </section>
    </>
  );
};
