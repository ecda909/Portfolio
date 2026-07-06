import React from 'react';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import {
  Home,
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  FlaskConical,
  Mail,
  Github,
  Linkedin,
  BookOpen,
  Twitter,
} from 'lucide-react';
import Icon0 from '../../assets/emblem.svg';

const Sidebar = ({ isStandalonePage = false }) => {
  const allNavigationItems = [
    { to: 'hero', icon: Home, label: 'Home' },
    { to: 'about', icon: User, label: 'About' },
    { to: 'experience', icon: Briefcase, label: 'Experience' },
    { to: 'technologies', icon: Cpu, label: 'Technologies' },
    { to: 'portfolio', icon: FolderGit2, label: 'Work' },
    { to: 'research', icon: FlaskConical, label: 'Research' },
    { to: 'contact', icon: Mail, label: 'Contact' },
  ];

  const navigationItems = isStandalonePage
    ? [{ to: '/', icon: Home, label: 'Home', isRoute: true }]
    : allNavigationItems;

  const socialItems = [
    { href: 'https://github.com/ecda909', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/eder-mazariegos-6a97b757', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://medium.com/@overcoffee', icon: BookOpen, label: 'Medium' },
    { href: 'https://twitter.com/eder_mazariegos', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <div className="custom-sidebar">
      <div className="sidebar-logo">
        {isStandalonePage ? (
          <LinkTo to="/" aria-label="Home">
            <Icon0 className="sidebar-emblem" viewBox="0 0 375 375" />
          </LinkTo>
        ) : (
          <Link to="hero" smooth duration={500} offset={-50} aria-label="Home">
            <Icon0 className="sidebar-emblem" viewBox="0 0 375 375" />
          </Link>
        )}
      </div>

      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.to} className="sidebar-item">
              {item.isRoute ? (
                <LinkTo to={item.to} className="sidebar-link" title={item.label}>
                  <IconComponent strokeWidth={1.6} />
                </LinkTo>
              ) : (
                <Link
                  to={item.to}
                  spy
                  smooth
                  duration={500}
                  offset={-50}
                  className="sidebar-link"
                  activeClass="active"
                  title={item.label}
                >
                  <IconComponent strokeWidth={1.6} />
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-social">
        {socialItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.href} className="sidebar-item">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-link social-link"
                title={item.label}
              >
                <IconComponent strokeWidth={1.6} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
