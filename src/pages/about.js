import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Wrench,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  FileDown,
  Linkedin,
  Github,
} from 'lucide-react';

import { headData } from '../mock/data';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui';
import '../style/main.scss';

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const AboutPage = () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About — Eder Mazariegos</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="The story of Eder Mazariegos — Site Reliability Engineer, Lead SRE at Booz Allen Hamilton and Founder of Blank Cut Inc." />
      </Helmet>

      <Sidebar isStandalonePage />

      <div className="main-content">
        <section className="about-story">
          <Container>
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
              <motion.div variants={item}>
                <Link to="/" className="text-link about-story__back">
                  <ArrowLeft strokeWidth={1.8} /> Back to home
                </Link>
              </motion.div>

              <motion.header className="about-story__header" variants={item}>
                <span className="kicker"><span className="kicker__num">/</span>My Story</span>
                <h1>From humble beginnings to founding my own platform company.</h1>
                <div className="about-story__author">
                  <div className="about-story__avatar">
                    <img src="/profile.png" alt="Eder Mazariegos" />
                  </div>
                  <div>
                    <span className="about-story__name">Eder Mazariegos</span>
                    <span className="about-story__role">Site Reliability Engineer · Boston, MA</span>
                  </div>
                  <div className="about-story__actions">
                    <a href="/resume.pdf" className="btn btn--solid" download>
                      <FileDown strokeWidth={1.8} /> Résumé
                    </a>
                    <div className="about-story__socials">
                      <a href="https://www.linkedin.com/in/eder-mazariegos-6a97b757" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin strokeWidth={1.6} />
                      </a>
                      <a href="https://github.com/ecda909" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github strokeWidth={1.6} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.header>

              <motion.div className="about-story__body" variants={item}>
                <div className="story-section">
                  <h2><Wrench className="story-icon" strokeWidth={1.6} /> Where it started</h2>
                  <p>
                    Long before I wrote a line of code, I was taking things apart to see how they worked. I grew up
                    watching my mom build computers from scratch, and I caught the same bug — cracking open cell phones,
                    jailbreaking iPhones for pocket money in high school, and spending long days in my dad&rsquo;s mechanic
                    shop, learning the quiet satisfaction of tinkering with something until it finally worked.
                  </p>
                  <p>
                    For a while I thought that curiosity pointed toward medicine. I shadowed doctors through a
                    high-school medical-track program and was sure I&rsquo;d become a neurologist — until I realized it
                    wasn&rsquo;t for me. What stuck wasn&rsquo;t the field, but the reason I was drawn to it: I always
                    knew I wanted to help people. I just hadn&rsquo;t figured out how yet. Technology turned out to be
                    the answer.
                  </p>
                </div>

                <div className="story-section">
                  <h2><GraduationCap className="story-icon" strokeWidth={1.6} /> Education &amp; early days</h2>
                  <p>
                    I earned my B.S. in Information Technology (with a minor in Computer Science) from the University
                    of Central Florida. My curiosity about how systems actually work — how they scale, where they
                    break, and how to keep them running — turned into a career built around reliability and automation.
                  </p>
                </div>

                <div className="story-section">
                  <h2><Briefcase className="story-icon" strokeWidth={1.6} /> Booz Allen &amp; Red Hat</h2>
                  <p>
                    I started at Booz Allen Hamilton delivering cloud-modernization and secure containerization for
                    defense and intelligence clients, then spent two years at Red Hat architecting large-scale
                    infrastructure — including a globally distributed replacement system for UPS that ran at 99.999%
                    uptime with a team of 20 senior SREs.
                  </p>
                  <p>
                    Today I’m back at Booz Allen as a Lead Site Reliability Engineer for the CDAO and Intelligence
                    Community, modernizing API gateways and automating Kubernetes across secured AWS environments — with
                    a TS/SCI clearance and a focus on NIST RMF compliance.
                  </p>
                </div>

                <div className="story-section">
                  <h2><Rocket className="story-icon" strokeWidth={1.6} /> Founding Blank Cut</h2>
                  <p>
                    In 2024 I founded Blank Cut Inc., a platform-engineering company. Its flagship is a multi-tenant
                    hosting platform that takes a client’s Git repo from onboarding to a live production URL, with
                    Claude-powered agents guarding the deploy gate. Around it I’ve built products like Venture Track and
                    Echo (evidence-based VC intelligence) and MedCAT (RAG-grounded clinical AI), plus open-source tooling
                    like a Kubernetes-native MCP server.
                  </p>
                </div>

                <div className="story-section">
                  <h2><Heart className="story-icon" strokeWidth={1.6} /> Philosophy</h2>
                  <p>
                    Good infrastructure is invisible — it just works, and it lets people ship with confidence. Whether
                    I’m tuning an SLO or wiring up an agentic deploy loop, the goal is the same: reduce complexity, build
                    trust, and make reliability the default rather than the exception.
                  </p>
                  <blockquote className="story-quote">
                    “Everything should be made as simple as possible, but not simpler.”
                    <cite>— Albert Einstein</cite>
                  </blockquote>
                </div>
              </motion.div>

              <motion.div className="about-story__cta" variants={item}>
                <h2>Let’s connect</h2>
                <div className="about-story__cta-actions">
                  <a href="/#contact" className="btn btn--solid">Get in touch</a>
                  <Link to="/projects" className="btn btn--outline">View my projects</Link>
                </div>
              </motion.div>
            </motion.div>
          </Container>

          <Footer />
        </section>
      </div>
    </>
  );
};

export default AboutPage;
