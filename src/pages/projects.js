import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaUser, FaDownload, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData, projectsData } from '../mock/data';
import Sidebar from '../components/Sidebar/Sidebar';
import '../style/main.scss';

const ProjectsPage = () => {
  const { title, lang, description } = headData;
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setShowContactForm(false);
  };

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production Ready': return 'success';
      case 'In Development': return 'warning';
      case 'In Development (MVP Phase)': return 'warning';
      case 'Ongoing Research': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Projects - Eder Mazariegos'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Explore the projects and innovations from Blank Cut Inc. - Eder Mazariegos Portfolio'} />
      </Helmet>
      <Sidebar isStandalonePage={true} />
      <div className="main-content">
        <section className="projects-page">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Section */}
            <Row className="justify-content-center">
              <Col lg={10} md={12} sm={12}>
                <motion.div variants={itemVariants} className="projects-hero">
                  <h1 className="projects-title">
                    <span className="number-text">My</span>
                    Portfolio
                  </h1>
                  <p className="projects-subtitle">
                    Innovative solutions in AI, cloud infrastructure, and health technology.
                    As Founder & CTO of Blank Cut Inc., I lead the development of cutting-edge platforms
                    that solve real-world problems through advanced technology.
                  </p>
                  <div className="projects-note">
                    <p className="text-muted">
                      <strong>Note:</strong> For detailed information about enterprise projects and additional technical work,
                      please <a href="/resume.pdf" download className="cta-btn cta-btn--resume">
                        <FaDownload className="me-2" />
                        Download Resume
                      </a>.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>

            {/* Projects List */}
            <Row className="justify-content-center">
              <Col lg={10} md={12} sm={12}>
                <motion.div variants={itemVariants} className="projects-list">
                  {projectsData.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="project-item mb-5"
                    >
                      <div className="project-header mb-4">
                        <div className="text-center mb-3">
                          <img
                            src={require(`../images/${project.img}`).default}
                            alt={`${project.title} Logo`}
                            className="project-logo mb-3"
                          />
                          <div className="project-badges mb-2">
                            <Badge bg={getStatusColor(project.status)} className="status-badge">
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-meta mb-3">
                          <span className="project-role">
                            <FaUser className="me-1" />
                            {project.role}
                          </span>
                        </div>
                      </div>

                      <div className="project-description mb-4">
                        <p className="project-info">{project.info}</p>
                        <p className="project-info-secondary text-muted">{project.info2}</p>

                        {project.details && (
                          <div className="project-details-clean mt-4">
                            <div className="details-overview mb-4">
                              <h5 className="details-title">Project Overview</h5>
                              <p className="details-text">{project.details.overview}</p>
                            </div>

                            <div className="details-grid">
                              {project.details.architecture && (
                                <div className="detail-item">
                                  <h6 className="detail-label">Architecture</h6>
                                  <ul className="detail-list">
                                    {project.details.architecture.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.details.coreFunctionality && (
                                <div className="detail-item">
                                  <h6 className="detail-label">Core Functionality</h6>
                                  <ul className="detail-list">
                                    {project.details.coreFunctionality.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.details.capabilities && (
                                <div className="detail-item">
                                  <h6 className="detail-label">Key Capabilities</h6>
                                  <ul className="detail-list">
                                    {project.details.capabilities.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.details.features && (
                                <div className="detail-item">
                                  <h6 className="detail-label">Features</h6>
                                  <ul className="detail-list">
                                    {project.details.features.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.details.aiMlPipeline && (
                                <div className="detail-item">
                                  <h6 className="detail-label">AI/ML Pipeline</h6>
                                  <ul className="detail-list">
                                    {project.details.aiMlPipeline.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.details.initiatives && (
                                <div className="detail-item">
                                  <h6 className="detail-label">Research Initiatives</h6>
                                  <ul className="detail-list">
                                    {project.details.initiatives.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            {project.details.techStack && (
                              <div className="tech-stack-section mt-4">
                                <h6 className="detail-label">Technology Stack</h6>
                                <div className="tech-stack-grid">
                                  <div className="tech-item">
                                    <span className="tech-label">Frontend:</span>
                                    <span className="tech-value">{project.details.techStack.frontend}</span>
                                  </div>
                                  <div className="tech-item">
                                    <span className="tech-label">Backend:</span>
                                    <span className="tech-value">{project.details.techStack.backend}</span>
                                  </div>
                                  <div className="tech-item">
                                    <span className="tech-label">Cloud:</span>
                                    <span className="tech-value">{project.details.techStack.cloud}</span>
                                  </div>
                                  <div className="tech-item">
                                    <span className="tech-label">DevOps:</span>
                                    <span className="tech-value">{project.details.techStack.devops}</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {project.details.businessImpact && (
                              <div className="business-impact-section mt-4">
                                <h6 className="detail-label">Business Impact</h6>
                                <div className="impact-highlight">
                                  <p>{project.details.businessImpact}</p>
                                </div>
                              </div>
                            )}

                            {project.details.note && (
                              <div className="project-note mt-4">
                                <p className="note-text">{project.details.note}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="project-technologies mb-4">
                        <h5 className="tech-title">Technologies Used</h5>
                        <div className="tech-badges">
                          {project.technologies?.map((tech, techIndex) => (
                            <Badge key={techIndex} bg="outline-secondary" className="me-1 mb-1 tech-badge">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="project-links mb-4">
                        <a
                          href={project.url}
                          className="btn btn-primary me-2 mb-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="me-2" />
                          {project.id === 'dropasite' ? 'Visit DropASite' : 'Visit Blank Cut Inc.'}
                        </a>
                        {project.repo && (
                          <a
                            href={project.repo}
                            className="btn btn-outline-secondary mb-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="me-2" />
                            View Code
                          </a>
                        )}
                      </div>

                      {index < projectsData.length - 1 && <hr className="project-divider" />}
                    </motion.div>
                  ))}
                </motion.div>
              </Col>
            </Row>

            {/* Contact Section */}
            <Row className="justify-content-center">
              <Col lg={10} md={12} sm={12}>
                <motion.div variants={itemVariants} className="contact-section">
                  {!showContactForm ? (
                    <div className="contact-cta text-center">
                      <h3 className="contact-title">
                        <FaEnvelope className="me-2" />
                        Interested in Collaboration?
                      </h3>
                      <p className="contact-description">
                        I'm always open to discussing new opportunities, partnerships,
                        or innovative projects that can make a meaningful impact.
                      </p>
                      <div className="contact-actions">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={() => setShowContactForm(true)}
                          className="me-3"
                        >
                          Get In Touch
                        </Button>
                        <a href="https://blankcut.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-lg">
                          Visit Blank Cut Inc.
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="contact-form-container">
                      <h3 className="contact-form-title">
                        <FaEnvelope className="me-2" />
                        Get In Touch
                      </h3>
                      <Form onSubmit={handleSubmit} className="contact-form">
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Your name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="your.email@example.com"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Tell me about your project or collaboration idea..."
                          />
                        </Form.Group>
                        <div className="form-actions">
                          <Button type="submit" variant="primary" size="lg" className="me-3">
                            <FaPaperPlane className="me-2" />
                            Send Message
                          </Button>
                          <Button
                            type="button"
                            variant="outline-secondary"
                            size="lg"
                            onClick={() => setShowContactForm(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </Form>
                    </div>
                  )}
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>
      </div>
    </>
  );
};

export default ProjectsPage;
