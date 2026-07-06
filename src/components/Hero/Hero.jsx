import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { Container } from '../ui';
import downloadFile from '../../../static/resume.pdf';

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { greeting, name, roles = [], description, cta } = hero || {};

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="hero">
      <Container>
        <motion.div className="hero__content" variants={container} initial="hidden" animate="visible">
          <motion.span className="hero__eyebrow kicker" variants={item}>
            <span className="kicker__num">EM</span>
            {greeting}
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            {(name || 'Site Reliability Engineer').split('\n').map((line, i) => (
              <span key={i} className="hero__title-line">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div className="hero__roles" variants={item}>
            {roles.map((r) => (
              <span key={r} className="hero__role">
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p className="hero__desc" variants={item}>
            {description}
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <a href={downloadFile} className="btn btn--solid" download>
              <Download strokeWidth={1.8} />
              {cta || 'Download Résumé'}
            </a>
            <Link to="portfolio" smooth duration={600} offset={-40} className="btn btn--outline">
              View Work
            </Link>
          </motion.div>
        </motion.div>

        <Link to="about" smooth duration={600} offset={-40} className="hero__scroll" aria-label="Scroll to about">
          <span>Scroll</span>
          <ArrowDown strokeWidth={1.6} />
        </Link>
      </Container>
    </section>
  );
};

export default Hero;
