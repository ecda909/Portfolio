import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  if (!experience) return null;

  const { paragraphOne, paragraphTwo, paragraphThree } = experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "1", label: "Startup (In Progress)", color: "dark" },
    { number: "2", label: "Awards", color: "dark" },
    { number: "11+", label: "Projects", color: "orange" },
    { number: "6+", label: "Years Experience", color: "dark" }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="align-items-center">
            {/* Experience Content */}
            <Col lg={6} md={6} sm={12} className="experience-content">
              <motion.div variants={itemVariants}>
                <h1 className="experience-title">
                  <span className="number-text">02.</span>
                  <Title title="Experience" />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="experience-text">
                <p>{paragraphOne}</p>
                {paragraphTwo && <p>{paragraphTwo}</p>}
                {paragraphThree && <p>{paragraphThree}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="experience-stats">
                <Row>
                  {stats.map((stat, index) => (
                    <Col lg={6} md={6} sm={6} xs={6} key={index} className="mb-3">
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className={`stat-card ${stat.color === 'orange' ? 'stat-card-orange' : 'stat-card-dark'}`}>
                          <Card.Body className="text-center">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>

            {/* Experience Image/Visual */}
            <Col lg={6} md={6} sm={12} className="experience-visual">
              <motion.div variants={itemVariants} className="experience-image">
                <div className="experience-graphic">
                  <div className="experience-circle">
                    <div className="experience-inner">
                      <h3>6+</h3>
                      <p>Years of Professional Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
