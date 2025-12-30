import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa';

function Home() {
  return (
    <section className="home-section" id="home">
      <NavBar />
      
      <div className="home-container">
        
        <div className="home-text">
           <span className="hello-tag">Welcome to my portfolio</span>
           
           <h1 className="name">
             Hi, I'm <br />
             <span className="name-highlight">Chamila Nirmal</span>
           </h1>
           
           <h2 className="role">Frontend Developer & BI Undergraduate</h2>
           
           {/* UPDATED BIO WITH YOUR CHOSEN SENTENCE */}
           <p className="description">
             I am a 3rd-year undergraduate at Uva Wellassa University. 
             I am a continuous learner passionate about <strong>developing software</strong> and 
             <strong> analyzing data</strong> to create impactful digital solutions.
           </p>

           <div className="cta-buttons">
             <a href="your-cv-link.pdf" download className="btn-primary">
               Download CV <FaDownload className="btn-icon" />
             </a>

             <div className="social-links">
               <a href="https://github.com/Nirmal2002Cn" target="_blank" rel="noreferrer"><FaGithub /></a>
               <a href="https://www.linkedin.com/in/chamila-nirmal-9b81132a4/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
               <a href="https://wa.me/94768790881" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
             </div>
           </div>
        </div>

        <div className="home-image">
           {/* Using the image with the black polo shirt */}
           <img src="bgimg.png" alt="Chamila Nirmal" className="profile-pic" />
        </div>

      </div>
    </section>
  );
}

export default Home;