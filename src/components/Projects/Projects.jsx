import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    }
  }, []);

  if (!projects) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Under Development': return 'warning';
      case 'Paused': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <motion.div
          className="project-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <Title title="Featured Projects" />
            <p className="lead grey-text mt-4">
              A showcase of my most significant projects and contributions
            </p>
          </motion.div>

          {projects.map((project, index) => {
            const { title, info, info2, url, repo, img, id, technologies, category, status } = project;
            const isEven = index % 2 === 0;

            return (
              <motion.div key={id} variants={itemVariants} className="mb-5">
                <Row className={`align-items-center ${!isEven ? 'flex-row-reverse' : ''}`}>
                  <Col lg={6} md={6} sm={12} className="mb-4 mb-md-0">
                    <Card className="project-card">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div>
                            <Badge bg="outline-secondary" className="mb-2">
                              {category}
                            </Badge>
                            <h3 className="project-title">{title}</h3>
                          </div>
                          <Badge bg={getStatusColor(status)}>
                            {status}
                          </Badge>
                        </div>

                        <p className="project-description">{info}</p>
                        {info2 && <p className="project-description-secondary">{info2}</p>}

                        {technologies && (
                          <div className="technologies mb-3">
                            {technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} bg="outline-primary" className="me-1 mb-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="project-links">
                          {url && url !== '#' && (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary me-2 mb-2"
                            >
                              <FaExternalLinkAlt className="me-1" />
                              Live Demo
                            </a>
                          )}
                          {repo && (
                            <a
                              href={repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary mb-2"
                            >
                              <FaGithub className="me-1" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <motion.div
                      className="project-image"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div className="image-wrapper">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </a>
                    </motion.div>
                  </Col>
                </Row>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
