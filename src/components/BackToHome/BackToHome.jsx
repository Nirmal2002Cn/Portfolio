import React, { useState, useEffect } from 'react';
import './BackToHome.css';
import { FaHome } from 'react-icons/fa'; // Import the professional icon

function BackToHomeButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Show button only when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Smooth Scroll Function
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`back-to-home-container ${isVisible ? 'visible' : ''}`}
      onClick={scrollToHome}
    >
        <button 
          className="back-to-home-btn" 
          aria-label="Back to home"
        >
          <FaHome className="home-icon" /> 
          <span className="btn-text">Home</span>
        </button>
    </div>
  );
}

export default BackToHomeButton;