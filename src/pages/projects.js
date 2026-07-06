import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { FileDown, ArrowLeft, Mail } from 'lucide-react';

import { headData, projectGroups } from '../mock/data';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Container, Grid } from '../components/ui';
import ProjectCard from '../components/ui/ProjectCard';
import '../style/main.scss';

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectsPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects — Eder Mazariegos</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content="Projects by Eder Mazariegos — Blank Cut products plus platform engineering delivered with Booz Allen Hamilton and Red Hat."
        />
      </Helmet>

      <Sidebar isStandalonePage />

      <div className="main-content">
        <section className="projects-page">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={item}>
                <Link to="/" className="text-link projects-page__back">
                  <ArrowLeft strokeWidth={1.8} /> Back to home
                </Link>
              </motion.div>

              <motion.header className="projects-page__hero" variants={item}>
                <span className="kicker"><span className="kicker__num">/</span>Projects</span>
                <h1>Selected work, grouped by where it was built.</h1>
                <p className="lead">
                  The products I ship at Blank Cut Inc., and the platform-engineering work I’ve delivered with
                  Booz Allen Hamilton and Red Hat. Enterprise engagements link to the résumé for detail.
                </p>
                <a href="/resume.pdf" className="btn btn--solid" download>
                  <FileDown strokeWidth={1.8} /> Download Résumé
                </a>
              </motion.header>

              {projectGroups.map((group) => (
                <div key={group.id} className="projects-page__group">
                  <motion.div className="projects-page__group-head" variants={item}>
                    <h2>{group.company}</h2>
                    <span className="projects-page__group-role">{group.role}</span>
                    <p className="muted">{group.blurb}</p>
                  </motion.div>

                  <Grid cols={group.projects.length > 1 ? 2 : 1} className="projects-page__grid">
                    {group.projects.map((p) => (
                      <motion.div key={p.id} variants={item}>
                        <ProjectCard project={p} variant="full" />
                      </motion.div>
                    ))}
                  </Grid>
                </div>
              ))}

              <motion.div className="projects-page__cta" variants={item}>
                <h2>Interested in working together?</h2>
                <p className="muted">
                  I’m open to platform-engineering roles, SRE work, and building products at Blank Cut.
                </p>
                <div className="projects-page__cta-actions">
                  <a href="/#contact" className="btn btn--solid">
                    <Mail strokeWidth={1.8} /> Get in touch
                  </a>
                  <a href="https://blankcut.com" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                    Visit Blank Cut
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </Container>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
