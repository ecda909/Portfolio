import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-scroll';
import { Link as LinkTo } from 'gatsby';
import Icon0 from '../../assets/emblem.svg';
import Icon1 from '../../assets/home.svg';
import Icon2 from '../../assets/mail.svg';
import Icon3 from '../../assets/person.svg';
import Icon4 from '../../assets/suitcase.svg';
import Icon5 from '../../assets/tools.svg';
import Icon6 from '../../assets/twitter.svg';
import Icon7 from '../../assets/instagram.svg';
import Icon8 from '../../assets/git.svg';
import Icon9 from '../../assets/medium.svg';
import Icon10 from '../../assets/portfolio.svg';

const Sidebar = () => {
  return (
    <ProSidebar className="d-none d-sm-none d-md-block d-lg-block">
      <Link to="hero" smooth duration={1000}>
        <Icon0 width="90px" height="100px" viewBox="30 120 400 90.999991" />
      </Link>
      <Menu iconShape="square">
        <MenuItem>
          <Link to="hero" smooth duration={1000}>
            <Icon1 width="90px" height="50px" viewBox="90 100 650 80" className="icon-padding" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="aboutme" smooth duration={1000}>
            <Icon3 width="90px" height="50px" viewBox="90 100 650 80" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="experience" smooth duration={1000}>
            <Icon4 width="90px" height="50px" viewBox="90 100 650 80" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="services" smooth duration={1000}>
            <Icon5 width="90px" height="50px" viewBox="90 100 650 80" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="portfolio" smooth duration={1000}>
            <Icon10 width="90px" height="50px" viewBox="90 100 650 80" />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="contact" smooth duration={1000}>
            <Icon2 width="90px" height="50px" viewBox="120 100 550 80" />
          </Link>
        </MenuItem>
        <MenuItem>
          <LinkTo to="https://twitter.com/ecda909" smooth duration={1000}>
            <Icon6 width="90px" height="25px" viewBox="0 100 1200 80" className="icon-padding" />
          </LinkTo>
        </MenuItem>
        <MenuItem>
          <LinkTo to="https://github.com/ecda909" smooth duration={1000}>
            <Icon8 width="90px" height="25px" viewBox="0 100 1200 80" />
          </LinkTo>
        </MenuItem>
        <MenuItem>
          <LinkTo to="https://medium.com/@thelonelydeveloper" smooth duration={1000}>
            <Icon9 width="90px" height="25px" viewBox="0 100 1200 80" />
          </LinkTo>
        </MenuItem>
        <MenuItem>
          <LinkTo to="https://www.instagram.com/eder_mazariegos_jr/" smooth duration={1000}>
            <Icon7 width="90px" height="25px" viewBox="0 100 1200 80" />
          </LinkTo>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
