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
                  I first started exploring technology when I was about 12 years old and ever since
                  then, I've been hooked. At a younger age, I loved learning how things worked; I
                  jailbroke iPhones for money on the side, took apart gadgets, drew sketches of
                  weird-looking devices that I dreamed of building, and even made imitational
                  companies I wished to start when I got older. I've always had a deep burning
                  passion for tech and entrepreneurship and feel as though the work I do and the
                  life I live today exemplifies that. <br />
                  <br />
                  In 2018, I graduated from the University of Central Florida (BS) and began my
                  career as a Full-Stack web developer and Cloud Solutions Architect. Shortly after,
                  I was hired by one of the top consulting firms in the nation and Fortune 500
                  companies Booz Allen Hamilton (BAH). At Booz Allen, I have continued building new,
                  innovative, and impactful projects for the DOD. I've worked to expand my knowledge
                  in DevOps engineering, web development, and cloud solutions architecture and
                  picked up a few entrepreneurial and leadership skills along the way. <br />
                  <br />
                  Leading and using my skills to help others at large is what I am wholeheartedly
                  passionate about doing. In both my work within the firm and at home, I constantly
                  seek to achieve excellence for my clients and future clients. I continuously learn
                  new things and lean on others to validate and diversify my point of view on the
                  work I engage within. I believe the people I work with have a profound impact on
                  my life and because of that I always look to build new things with others so that
                  what we create together is truly extraordinary. I hope the work I do can leave an
                  imprint on the world and allow for others to profit in ways no one has ever seen
                  before.
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
