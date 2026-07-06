import React, { useContext } from 'react';
import { Github, Linkedin, BookOpen, Twitter, ArrowUp } from 'lucide-react';
import PortfolioContext from '../../context/context';
import { footerData } from '../../mock/data';
import { Container } from '../ui';
import Icon0 from '../../assets/emblem.svg';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  medium: BookOpen,
  twitter: Twitter,
};

const Footer = () => {
  const context = useContext(PortfolioContext);
  const footer = context?.footer || footerData;
  const { networks } = footer;

  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">
              <Icon0 viewBox="0 0 375 375" />
            </span>
            <span>Eder Mazariegos — Boston, MA</span>
          </div>

          <div className="footer__social">
            {networks &&
              networks.map(({ id, name, url }) => {
                const IconComponent = ICONS[name] || Github;
                return (
                  <a key={id} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <IconComponent strokeWidth={1.6} />
                  </a>
                );
              })}
            <span className="back-to-top">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
              >
                <ArrowUp strokeWidth={1.6} />
              </button>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
