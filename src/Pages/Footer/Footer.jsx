import React from 'react';
import './Footer.css';
// Importing the specific icons you need
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X icon is usually in fa6

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        {/* Social Icons Container */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF className="social-icon" />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <FaXTwitter className="social-icon" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="social-icon" />
          </a>

          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="social-icon" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="footer-text">
          © {new Date().getFullYear()} Chamila Nirmal. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer;