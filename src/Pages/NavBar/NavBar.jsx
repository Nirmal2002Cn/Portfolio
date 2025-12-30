import React, { useState, useEffect } from 'react';
import './Nav.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-container">
          <img className="logo" src="logo.png" alt="logo" />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a className="nav-link" href="#home" onClick={closeMenu}>
            Home
          </a>
          <a className="nav-link" href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="nav-link" href="#services" onClick={closeMenu}>
            Services
          </a>
          <a className="nav-link" href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
          <a className="nav-link" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="button-container">
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;