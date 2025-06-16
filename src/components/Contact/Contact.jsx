import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  if (!contact) return null;

  const { cta, btn, email } = contact;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xpzokapd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlertType('success');
        setShowAlert(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setAlertType('danger');
        setShowAlert(true);
      }
    } catch (error) {
      setAlertType('danger');
      setShowAlert(true);
    }

    setTimeout(() => setShowAlert(false), 5000);
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

  return (
    <>
      <section className="contact" id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Contact Header */}
          <Row className="justify-content-center mb-5">
            <Col lg={8} md={10} sm={12} className="text-center">
              <motion.div variants={itemVariants}>
                <h1 className="contact-main-title">Get In Touch</h1>
                <p className="contact-main-description">
                  {cta || "Let's work together to build reliable, scalable systems. I'm always open to discussing new opportunities and interesting projects."}
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-start">
            {/* Contact Form - Drop a Line */}
            <Col lg={6} md={6} sm={12} className="contact-form mb-5">
              <motion.div variants={itemVariants}>
                <h2 className="form-title">Drop a Line</h2>

                {showAlert && (
                  <Alert variant={alertType} className="mb-4">
                    {alertType === 'success'
                      ? 'Thank you! Your message has been sent successfully.'
                      : 'Sorry, there was an error sending your message. Please try again.'}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="contact-form-container">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </Form.Group>

                  <Button type="submit" className="submit-btn">
                    {btn || 'Send Message'}
                  </Button>
                </Form>
              </motion.div>
            </Col>

            {/* Contact Information */}
            <Col lg={6} md={6} sm={12} className="contact-info">
              <motion.div variants={itemVariants} className="contact-methods mb-4">
                <h3 className="contact-section-title">Get In Touch</h3>
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h5>Call</h5>
                    <a href="tel:352-286-9493">+1 (352) 286-9493</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h5>Location</h5>
                    <span>Boston, MA</span>
                  </div>
                </div>
              </motion.div>

            </Col>

          </Row>
        </motion.div>
      </Container>
    </section>

    {/* Find Me On Section */}
    <section id="social" className="social-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12} className="text-center">
              <motion.div variants={itemVariants}>
                <h2 className="social-title">
                  <span className="number-text">Find Me</span>
                  On
                </h2>
                <p className="social-description">
                  Connect with me on social media and stay updated with my latest projects and insights.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="social-grid">
                <div className="social-card">
                  <a href="https://github.com/ecda909" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <FaGithub />
                    </div>
                    <h4>GitHub</h4>
                    <p>Check out my repositories and open source contributions</p>
                  </a>
                </div>

                <div className="social-card">
                  <a href="https://www.linkedin.com/in/eder-mazariegos-6a97b757" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                      <FaLinkedin />
                    </div>
                    <h4>LinkedIn</h4>
                    <p>Connect professionally and view my career journey</p>
                  </a>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
    </>
  );
};

export default Contact;
