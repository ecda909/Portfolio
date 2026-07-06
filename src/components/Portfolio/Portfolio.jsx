import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { projectGroups } from '../../mock/data';
import { Container, Kicker, Grid } from '../ui';
import ProjectCard from '../ui/ProjectCard';

// Home preview: lead with Blank Cut, show a couple of highlight projects per group.
const PREVIEW = {
  'blank-cut': ['blank-cut-platform', 'venture-track', 'echo', 'medcat'],
  'booz-allen': ['bah-platform-engineering'],
  'red-hat': ['ups-orchestration'],
};

const Portfolio = () => {
  const { portfolio } = useContext(PortfolioContext);
  const intro = portfolio?.intro;

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div className="section-head" variants={item}>
            <Kicker num="04">Selected Work</Kicker>
            <h2>What I build, and where.</h2>
            <p>{intro}</p>
          </motion.div>

          {projectGroups.map((group) => {
            const ids = PREVIEW[group.id] || group.projects.map((p) => p.id);
            const projects = group.projects.filter((p) => ids.includes(p.id));
            if (!projects.length) return null;
            return (
              <div key={group.id} className="portfolio-group">
                <motion.div className="portfolio-group__head" variants={item}>
                  <span className="portfolio-group__company">{group.company}</span>
                  <span className="portfolio-group__role">{group.role}</span>
                </motion.div>
                <Grid cols={2} className="portfolio-group__grid">
                  {projects.map((p) => (
                    <motion.div key={p.id} variants={item}>
                      <ProjectCard project={p} variant="compact" />
                    </motion.div>
                  ))}
                </Grid>
              </div>
            );
          })}

          <motion.div className="portfolio__more" variants={item}>
            <Link to="/projects" className="btn btn--solid">
              View all projects
              <ArrowUpRight strokeWidth={1.8} />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;
