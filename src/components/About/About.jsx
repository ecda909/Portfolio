import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { coreTech } from '../../mock/data';
import { Container, Grid, Kicker, Tag } from '../ui';
import AboutMe from '../../assets/aboutme.svg';
import downloadFile from '../../../static/resume.pdf';

// Uses the real photo at /profile.jpg; falls back to the illustration if absent.
const AboutPortrait = () => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <AboutMe viewBox="0 0 300 400" preserveAspectRatio="xMidYMin meet" />;
  }
  return (
    <img
      src="/profile.png"
      alt="Eder Mazariegos"
      className="about__photo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const About = () => {
  const { about } = useContext(PortfolioContext);
  if (!about) return null;
  const { paragraphs = [] } = about;

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section className="about" id="about">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <Grid className="grid--split about__grid">
            <motion.div className="about__figure" variants={item}>
              <div className="about__portrait">
                <AboutPortrait />
              </div>
            </motion.div>

            <motion.div className="about__content" variants={item}>
              <Kicker num="01">About</Kicker>
              <h2>A Site Reliability Engineer obsessed with systems that don’t fall over.</h2>

              <div className="about__text">
                {paragraphs.map((p, i) => (
                  <p key={i} className={i === 0 ? '' : 'muted'}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="about__tech">
                <span className="about__tech-label">Core stack</span>
                <div className="tag-row">
                  {coreTech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>

              <div className="about__actions">
                <a href={downloadFile} className="btn btn--solid" download>
                  Download Résumé
                </a>
                <Link to="contact" smooth duration={500} className="btn btn--outline">
                  Get in touch
                  <ArrowRight strokeWidth={1.8} />
                </Link>
              </div>

              <LinkTo to="/about" className="text-link about__story">
                Read my full story
                <ArrowUpRight strokeWidth={1.8} />
              </LinkTo>
            </motion.div>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
