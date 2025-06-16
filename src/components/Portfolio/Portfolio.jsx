import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Portfolio = () => {
  const { portfolio } = useContext(PortfolioContext);

  if (!portfolio) return null;

  const { paragraphOne, paragraphTwo } = portfolio;

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

  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div variants={itemVariants} className="text-center mb-5">
                <h1>
                  <span className="grey-text number-text">04.</span>
                  <Title title="My Portfolio" />
                </h1>
                <p className="lead grey-text mt-4">
                  {paragraphOne}
                </p>
                <p className="grey-text">
                  {paragraphTwo}
                </p>
              </motion.div>

              {/* Projects Preview */}
              <motion.div variants={itemVariants} className="portfolio-preview mb-5">
                <Row>
                  <Col lg={6} md={6} sm={12} className="mb-4">
                    <Card className="portfolio-card h-100">
                      <Card.Body className="d-flex flex-column">
                        <div className="text-center mb-3">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <img
                              src={require(`../../images/kube_agent_logo.png`).default}
                              alt="KubeAgent Logo"
                              className="portfolio-logo me-2"
                            />
                            <Badge bg="outline-secondary">
                              Blank Cut Inc.
                            </Badge>
                          </div>
                          <h5 className="card-title">KubeAgent Platform</h5>
                          <Badge bg="warning" className="mt-2">
                            In Development
                          </Badge>
                        </div>

                        <p className="card-text grey-text flex-grow-1">
                          Kubernetes-native platform deploying ephemeral Claude 4-powered AI agents for intelligent infrastructure management.
                        </p>

                        <div className="technologies mb-3">
                          <Badge bg="outline-primary" className="me-1 mb-1">Go</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">Next.js</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">Kubernetes</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">Claude 4</Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} sm={12} className="mb-4">
                    <Card className="portfolio-card h-100">
                      <Card.Body className="d-flex flex-column">
                        <div className="text-center mb-3">
                          <div className="d-flex align-items-center justify-content-center mb-2">
                            <img
                              src={require(`../../images/drop_a_site_logo.png`).default}
                              alt="DropASite Logo"
                              className="portfolio-logo me-2"
                            />
                            <Badge bg="outline-secondary">
                              Blank Cut Inc.
                            </Badge>
                          </div>
                          <h5 className="card-title">DropASite Platform</h5>
                          <Badge bg="success" className="mt-2">
                            Production Ready
                          </Badge>
                        </div>

                        <p className="card-text grey-text flex-grow-1">
                          Cloud-native platform enabling rapid deployment of static websites with automated AWS infrastructure provisioning.
                        </p>

                        <div className="technologies mb-3">
                          <Badge bg="outline-primary" className="me-1 mb-1">Next.js 15</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">AWS S3</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">CloudFront</Badge>
                          <Badge bg="outline-primary" className="me-1 mb-1">Terraform</Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.div>
              {/* View All Projects Button */}
              <motion.div variants={itemVariants} className="text-center mt-5">
                <Link
                  to="/projects"
                  className="cta-btn cta-btn--portfolio"
                >
                  View All Projects
                </Link>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;
