import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, GraduationCap, Award } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { Container, Kicker, Stat } from '../ui';
import { CapabilitiesChart } from '../ui/Charts';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);
  if (!experience) return null;

  const {
    intro,
    timeline = [],
    stats = [],
    capabilities = [],
    credentials = {},
  } = experience;

  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="experience" id="experience">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div className="section-head" variants={item}>
            <Kicker num="02">Experience</Kicker>
            <h2>Where I’ve done the work.</h2>
            <p>{intro}</p>
          </motion.div>

          {/* Stat strip */}
          <motion.div className="stat-row experience__stats" variants={item}>
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>

          <div className="experience__body">
            {/* Timeline */}
            <div className="timeline">
              {timeline.map((role) => (
                <motion.div key={role.id} className="timeline__item" variants={item}>
                  <div className="timeline__marker" aria-hidden />
                  <div className="timeline__card">
                    <div className="timeline__head">
                      <div>
                        <h3 className="timeline__role">{role.role}</h3>
                        <div className="timeline__company">
                          {role.company}
                          {role.current && <span className="timeline__badge">Current</span>}
                        </div>
                      </div>
                      <div className="timeline__meta">
                        <span className="timeline__period">{role.period}</span>
                        <span className="timeline__loc">
                          <MapPin size={13} strokeWidth={1.6} /> {role.location}
                        </span>
                      </div>
                    </div>
                    <p className="timeline__summary">{role.summary}</p>
                    {role.bullets.length > 0 && (
                      <ul className="timeline__bullets">
                        {role.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Side rail: capabilities chart + credentials */}
            <div className="experience__rail">
              <motion.div className="card experience__chart" variants={item}>
                <span className="rail__label">Capabilities</span>
                <CapabilitiesChart data={capabilities} />
              </motion.div>

              <motion.div className="card experience__creds" variants={item}>
                <span className="rail__label">Credentials</span>
                <ul className="creds__list">
                  {credentials.certifications?.map((c) => (
                    <li key={c}>
                      <Award size={15} strokeWidth={1.6} /> {c}
                    </li>
                  ))}
                  {credentials.clearance && (
                    <li>
                      <ShieldCheck size={15} strokeWidth={1.6} /> Security clearance: {credentials.clearance}
                    </li>
                  )}
                  {credentials.education && (
                    <li>
                      <GraduationCap size={15} strokeWidth={1.6} /> {credentials.education}
                    </li>
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
