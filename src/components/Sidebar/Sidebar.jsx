import React from 'react';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import { FaHome, FaUser, FaBriefcase, FaTools, FaFolderOpen, FaFlask, FaEnvelope, FaShare, FaTwitter, FaGithub, FaMedium, FaInstagram } from 'react-icons/fa';
import Icon0 from '../../assets/emblem.svg';

const Sidebar = ({ isStandalonePage = false }) => {
  const allNavigationItems = [
    { to: 'hero', icon: FaHome, label: 'Home' },
    { to: 'aboutme', icon: FaUser, label: 'About' },
    { to: 'experience', icon: FaBriefcase, label: 'Experience' },
    { to: 'services', icon: FaTools, label: 'Services' },
    { to: 'portfolio', icon: FaFolderOpen, label: 'Portfolio' },
    { to: 'research', icon: FaFlask, label: 'Research' },
    { to: 'contact', icon: FaEnvelope, label: 'Contact' },
    { to: 'social', icon: FaShare, label: 'Social' }
  ];

  // For standalone pages, only show Home navigation
  const navigationItems = isStandalonePage
    ? [{ to: '/', icon: FaHome, label: 'Home', isRoute: true }]
    : allNavigationItems;

  const socialItems = [
    { href: 'https://twitter.com/eder_mazariegos', icon: FaTwitter, label: 'Twitter' },
    { href: 'https://github.com/ecda909', icon: FaGithub, label: 'GitHub' },
    { href: 'https://medium.com/@overcoffee', icon: FaMedium, label: 'Medium' },
    { href: 'https://www.instagram.com/edermazariegosjr/', icon: FaInstagram, label: 'Instagram' }
  ];

  return (
    <div className="custom-sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        {isStandalonePage ? (
          <LinkTo to="/">
            <Icon0 width="40px" height="50px" viewBox="30 120 400 90.999991" />
          </LinkTo>
        ) : (
          <Link to="hero" smooth duration={500} offset={-50}>
            <Icon0 width="40px" height="50px" viewBox="30 120 400 90.999991" />
          </Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.to} className="sidebar-item">
              {item.isRoute ? (
                <LinkTo
                  to={item.to}
                  className="sidebar-link"
                  title={item.label}
                >
                  <IconComponent size={20} />
                </LinkTo>
              ) : (
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-50}
                  className="sidebar-link"
                  title={item.label}
                >
                  <IconComponent size={20} />
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Social Links */}
      <div className="sidebar-social">
        {socialItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.href} className="sidebar-item">
              <LinkTo
                to={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-link social-link"
                title={item.label}
              >
                <IconComponent size={18} />
              </LinkTo>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
