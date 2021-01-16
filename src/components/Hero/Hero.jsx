import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import downloadFile from '../../../static/resume.pdf';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

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
    <section id="hero">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="row justify-content-center justify-content-md-start justify-content-lg-start">
            <h4 className="font-weight-light grey-text">Hi, my name is</h4>
          </div>
          <div className="row justify-content-center justify-content-md-start justify-content-lg-start">
            <h1 className="hero-title mt-3 ml-0 pl-0 white-text text-center text-md-left text-lg-left">
              {name || 'Eder Mazariegos'}.
              <br />
              <span className="grey-text">{subtitle || 'A Full-Stack web developer.'}</span>
            </h1>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="row mb-5">
            <div className="col-12 col-md-7 col-lg-7 ml-0 pl-md-0 pl-lg-0 mx-sm-auto mx-md-0 float-md-left float-lg-left">
              <p className="grey-text text-center text-md-left text-lg-left">
                I have a deep passion for cloud, Full-Stack, and DevOps engineering/development; I'm
                also an aspiring tech entrepreneur. My work is very important to me and using my
                skills to help others at scale is what I work to accomplish everyday.
              </p>
            </div>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="row justify-content-center justify-content-md-start justify-content-lg-start">
            <p className="hero-cta ml-0">
              <span className="cta-btn cta-btn--hero">
                <a href={downloadFile} smooth duration={1000} download>
                  {cta || 'Download Resume'}
                </a>
              </span>
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
