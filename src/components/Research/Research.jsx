import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaExternalLinkAlt, FaFlask, FaBookOpen } from 'react-icons/fa';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Research = () => {
  const { research } = useContext(PortfolioContext);
  const [activeTab, setActiveTab] = useState('studies');

  if (!research) return null;

  const { title, description, currentStudies = [], articles = [] } = research;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Planning': return 'warning';
      case 'Completed': return 'primary';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="research" id="research">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div variants={itemVariants} className="text-center mb-5">
                <h1>
                  <span className="grey-text number-text">05.</span>
                  <Title title={title} />
                </h1>
                <p className="lead grey-text mt-4">{description}</p>
              </motion.div>

              {/* Tab Navigation */}
              <motion.div variants={itemVariants} className="research-tabs mb-4">
                <div className="d-flex justify-content-center">
                  <button
                    className={`tab-btn ${activeTab === 'studies' ? 'active' : ''}`}
                    onClick={() => setActiveTab('studies')}
                  >
                    <FaFlask className="me-2" />
                    Current Studies
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
                    onClick={() => setActiveTab('articles')}
                  >
                    <FaBookOpen className="me-2" />
                    Research Articles
                  </button>
                </div>
              </motion.div>

              {/* Current Studies Tab */}
              {activeTab === 'studies' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Row>
                    {currentStudies && currentStudies.length > 0 ? currentStudies.map((study) => (
                      <Col lg={6} md={6} sm={12} key={study.id} className="mb-4">
                        <motion.div variants={itemVariants}>
                          <Card className="research-card h-100">
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <h5 className="card-title">{study.title}</h5>
                                <Badge bg={getStatusColor(study.status)}>
                                  {study.status}
                                </Badge>
                              </div>
                              
                              <p className="card-text grey-text">{study.description}</p>
                              
                              <div className="mb-3">
                                <small className="text-muted d-flex align-items-center mb-2">
                                  <FaCalendarAlt className="me-2" />
                                  Started: {formatDate(study.startDate)}
                                </small>
                                <div className="progress-section">
                                  <div className="d-flex justify-content-between mb-1">
                                    <small>Progress</small>
                                    <small>{study.progress}%</small>
                                  </div>
                                  <ProgressBar 
                                    now={study.progress} 
                                    variant={getStatusColor(study.status)}
                                    className="custom-progress"
                                  />
                                </div>
                              </div>
                              
                              <div className="technologies">
                                {study.technologies.map((tech, index) => (
                                  <Badge key={index} bg="outline-secondary" className="me-1 mb-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    )) : (
                      <Col xs={12} className="text-center">
                        <p className="grey-text">No current studies available.</p>
                      </Col>
                    )}
                  </Row>
                </motion.div>
              )}

              {/* Research Articles Tab */}
              {activeTab === 'articles' && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Row>
                    {articles && articles.length > 0 ? articles.map((article) => (
                      <Col lg={6} md={6} sm={12} key={article.id} className="mb-4">
                        <motion.div variants={itemVariants}>
                          <Card className={`research-card h-100 ${article.featured ? 'featured' : ''}`}>
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <h5 className="card-title">{article.title}</h5>
                                {article.featured && (
                                  <Badge bg="warning" text="dark">Featured</Badge>
                                )}
                              </div>
                              
                              <p className="card-text grey-text">{article.description}</p>
                              
                              <div className="article-meta mb-3">
                                <small className="text-muted d-flex align-items-center mb-1">
                                  <FaCalendarAlt className="me-2" />
                                  {formatDate(article.publishDate)}
                                </small>
                                <small className="text-muted d-flex align-items-center">
                                  <FaClock className="me-2" />
                                  {article.readTime}
                                </small>
                              </div>
                              
                              <div className="tags mb-3">
                                {article.tags.map((tag, index) => (
                                  <Badge key={index} bg="outline-primary" className="me-1 mb-1">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              {article.url !== '#' && (
                                <a 
                                  href={article.url} 
                                  className="btn btn-outline-primary btn-sm"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Read Article <FaExternalLinkAlt className="ms-1" />
                                </a>
                              )}
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    )) : (
                      <Col xs={12} className="text-center">
                        <p className="grey-text">No research articles available.</p>
                      </Col>
                    )}
                  </Row>
                </motion.div>
              )}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Research;
