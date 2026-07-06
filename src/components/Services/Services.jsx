import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { ArrowUpRight } from 'lucide-react';
import { Container, Kicker } from '../ui';
import BrandIcon from '../ui/BrandIcon';

const primaryTech = [
  'Kubernetes',
  'AWS',
  'Google Cloud',
  'Terraform',
  'Go',
  'Python',
  'TypeScript',
  'Docker',
  'React',
  'Linux',
];

const Services = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section className="technologies" id="technologies">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          <motion.div className="section-head" variants={item}>
            <Kicker num="03">Technologies</Kicker>
            <h2>The tools I reach for.</h2>
            <p>
              From infrastructure automation to full-stack delivery — the core of a stack I use to build
              scalable, reliable systems.
            </p>
          </motion.div>

          <div className="tech-grid">
            {primaryTech.map((name) => (
              <motion.div key={name} className="tech-tile" variants={item}>
                <div className="tech-tile__icon">
                  <BrandIcon name={name} size={40} />
                </div>
                <span className="tech-tile__name">{name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className="tech-more" variants={item}>
            <Link to="/technologies" className="text-link">
              View the full stack
              <ArrowUpRight strokeWidth={1.8} />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
