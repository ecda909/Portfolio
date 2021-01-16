import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Icon0 from '../../assets/emblem.svg';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container fluid>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <Icon0 width="90px" height="70px" viewBox="60 120 300 90.999991" />
          </Col>
          <Col sm={12} md={4} lg={4} className="d-none d-sm-none d-md-inline d-lg-inline">
            <Row className="footer-text justify-content-center">
              <Col sm={4} md={4} lg={4}>
                <Link to="experience" smooth duration={1000}>
                  Experience
                </Link>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Link to="services" smooth duration={1000}>
                  Services
                </Link>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Link to="contact" smooth duration={1000}>
                  Contact
                </Link>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Row>
              <Col>
                <div className="social-links">
                  {networks &&
                    networks.map((network) => {
                      const { id, name, url } = network;
                      return (
                        <a
                          key={id}
                          href={url || 'https://github.com/ecda909'}
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={name}
                        >
                          <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                        </a>
                      );
                    })}
                </div>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <p className="footer__text">
                  © {new Date().getFullYear()} - Developed by Eder Mazariegos
                </p>
              </Col>
            </Row> */}
          </Col>
          <Col sm={12} md={1} lg={1} className="offset-0 offset-md-1 offset-lg-1">
            <span className="back-to-top">
              <Link to="hero" smooth duration={1000}>
                <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
              </Link>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
