import React from 'react';
import './BackToHome.css'; // You'll need to create this CSS file

function BackToHomeButton() {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're on a different page, navigate to the home page first
      window.location.href = '/#home';
    }
  };

  return (
    <button 
      className="back-to-home-btn" 
      onClick={scrollToHome}
      aria-label="Back to home"
    >
      <i className="home-icon">🏠</i> Home
    </button>
  );
}

export default BackToHomeButton;