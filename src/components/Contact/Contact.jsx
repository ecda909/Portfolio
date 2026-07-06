import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { Container, Kicker } from '../ui';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  if (!contact) return null;
  const { cta, btn, email, phone, location } = contact;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xpzokapd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 5000);
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="contact__grid">
            {/* Left: pitch + details */}
            <motion.div className="contact__intro" variants={item}>
              <Kicker num="06">Contact</Kicker>
              <h2>Let’s build something reliable.</h2>
              <p className="muted">{cta}</p>

              <ul className="contact__details">
                <li>
                  <span className="contact__ico"><Mail size={18} strokeWidth={1.6} /></span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                {phone && (
                  <li>
                    <span className="contact__ico"><Phone size={18} strokeWidth={1.6} /></span>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                  </li>
                )}
                <li>
                  <span className="contact__ico"><MapPin size={18} strokeWidth={1.6} /></span>
                  <span>{location}</span>
                </li>
              </ul>

              <div className="contact__socials">
                <a href="https://github.com/ecda909" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github strokeWidth={1.6} />
                </a>
                <a
                  href="https://www.linkedin.com/in/eder-mazariegos-6a97b757"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin strokeWidth={1.6} />
                </a>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form className="contact__form" onSubmit={handleSubmit} variants={item}>
              <div className="field-row">
                <input
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="field"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                className="field"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="field field--area"
                name="message"
                rows={6}
                placeholder="Tell me about your project or role…"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {status === 'success' && <div className="form-note form-note--ok">Message sent — I’ll be in touch.</div>}
              {status === 'error' && <div className="form-note form-note--err">Something went wrong. Please try again.</div>}

              <button type="submit" className="btn btn--solid">
                <Send strokeWidth={1.8} />
                {btn || 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
