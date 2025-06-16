import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import Python from '../../assets/python.svg';
import Docker from '../../assets/docker.svg';
import Javascript from '../../assets/javascript.svg';
import Kubernetes from '../../assets/kubernetes.svg';
import Reaction from '../../assets/reaction.svg';
import Aws from '../../assets/aws.svg';
import Title from '../Title/Title';

const Services = () => {
  // Core Technologies - Most Important
  const primaryServices = [
    { name: 'Python', icon: Python },
    { name: 'JavaScript', icon: Javascript },
    { name: 'Docker', icon: Docker },
    { name: 'Kubernetes', icon: Kubernetes },
    { name: 'React', icon: Reaction },
    { name: 'AWS', icon: Aws }
  ];

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

  const ServiceCard = ({ service, index }) => {
    const IconComponent = service.icon;

    return (
      <Col lg={4} md={6} sm={6} xs={12} key={service.name} className="mb-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="service-card h-100">
            <Card.Body className="d-flex align-items-center">
              <div className="service-icon">
                {IconComponent && (
                  <IconComponent
                    viewBox="80 30 300 300"
                    preserveAspectRatio="xMinYMin meet"
                  />
                )}
              </div>
              <div className="service-name">
                <h5>{service.name}</h5>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
    );
  };

  return (
    <section className="services" id="services">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="align-items-center">
            {/* Services Content */}
            <Col lg={6} md={6} sm={12} className="services-content">
              <motion.div variants={itemVariants}>
                <h1 className="services-title">
                  <span className="number-text">03.</span>
                  <Title title="My Technologies" />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants} className="services-text">
                <p>
                  A comprehensive list of technologies and services I offer to clients.
                  With expertise spanning multiple programming languages, cloud platforms,
                  and modern development frameworks, I deliver end-to-end solutions for
                  complex technical challenges.
                </p>
                <p>
                  From infrastructure automation to full-stack development, I leverage
                  industry-leading tools and best practices to build scalable, reliable systems.
                </p>
              </motion.div>
            </Col>

            {/* Services Grid */}
            <Col lg={6} md={6} sm={12} className="services-grid">
              <Row>
                {primaryServices.map((service, index) => (
                  <ServiceCard key={service.name} service={service} index={index} />
                ))}
              </Row>

              <div className="text-center mt-4">
                <Link
                  to="/technologies"
                  className="cta-btn cta-btn--services"
                >
                  View All Technologies
                </Link>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};
export default Services;
