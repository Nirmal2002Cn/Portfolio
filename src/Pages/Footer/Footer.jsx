import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">© Chamila Nirmal. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><img src="facebook.svg" alt="Facebook" /></a>
          <a href="#" className="social-icon"><img src="x (1).svg" alt="Twitter" /></a>
          <a href="#" className="social-icon"><img src="linkdin.svg" alt="LinkedIn" /></a>
          <a href="#" className="social-icon"><img src="whatsapp.svg" alt="whatsapp" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer