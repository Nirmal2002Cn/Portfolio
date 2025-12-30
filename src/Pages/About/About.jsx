import React from 'react';
import './About.css';
import BackToHome from '../../components/BackToHome/BackToHome';
import ExperienceSec from '../../components/ExperienceSec';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <p className="section-label">ABOUT ME</p>
        <h1 className="main-title">
          Get to Know Me <span className="highlight">Better</span>
        </h1>

        <div className="about-content">
          <ExperienceSec />
          <BackToHome />
        </div>

      </div>
    </section>
  );
}

export default About;
