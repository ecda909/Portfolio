import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Research from './Research/Research';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Services from './Services/Services';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  experienceData,
  portfolioData,
  projectsData,
  researchData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experience, setExperience] = useState({});
  const [portfolio, setPortfolio] = useState({});
  const [projects, setProjects] = useState([]);
  const [research, setResearch] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setExperience({ ...experienceData });
    setPortfolio({ ...portfolioData });
    setProjects([...projectsData]);
    setResearch({ ...researchData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, experience, portfolio, projects, research, contact, footer }}>
      <Sidebar />
      <div className="main-content">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Research />
        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
