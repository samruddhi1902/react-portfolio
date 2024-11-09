import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="nav-bar">
        <h1 className="logo">SB</h1>
        <ul className="permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#testimonials">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="container header__container">
      
        <h5>Hello, I'm</h5>
        <h1>Samruddhi Borhade</h1>
        <h2 className="text-light">Data Engineer</h2>
        <p className="header__description">
          I’m a passionate Computer Science student at Symbiosis Institute of Technology, Pune with a focus on Data Science. Currently, I'm honing my skills as a Data Engineer Intern at Bajaj Finserv, where I’m learning to leverage data insights for enhanced user experiences. Whether working on innovative university projects or contributing to student organizations, I’m dedicated to growth, teamwork, and creating meaningful solutions.
        </p>
        
        <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
    
  );
};

export default Header;
