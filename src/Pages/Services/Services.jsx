import React from 'react';
import './Services.css';
import { FaPaintBrush, FaCode, FaChartBar, FaBug } from 'react-icons/fa';

function Services() {
  const servicesData = [
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description: "Designing modern, user-friendly interfaces (UI/UX) that look great on mobile and desktop. I focus on layout, color theory, and responsiveness.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Building interactive web applications using React.js and modern CSS. I turn static designs into functional, high-performance websites.",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669, #10b981)"
    },
    {
      icon: <FaChartBar />,
      title: "Data Analysis",
      description: "Analyzing complex datasets to find meaningful trends. I use Python (Pandas) and visualization tools to help businesses make data-driven decisions.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #34d399)"
    },
    {
      icon: <FaBug />,
      title: "Software Testing",
      description: "Ensuring software quality through rigorous testing. I identify bugs, write test cases, and perform regression testing to deliver crash-free applications.",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669, #10b981)"
    }
  ];

  return (
    <section className='service-section' id="services">
      <div className="services-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="services-container">
        <div className="section-header-services">
          <p className='section-label-green'>
            <span className="label-dot"></span>
            EXPERTISE
            <span className="label-dot"></span>
          </p>
          <h1 className='main-title'>
            What I <span className='green'>Do</span>
          </h1>
          <div className="title-underline-services"></div>
          <p className="section-subtitle">
            Transforming ideas into digital reality with creativity and precision
          </p>
        </div>
        
        <div className='services-grid'>
          {servicesData.map((service, index) => (
            <div 
              className='service-card' 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-glow-effect"></div>
              <div 
                className="icon-wrapper"
                style={{ background: service.gradient }}
              >
                <div className="icon-content">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
                <div className="icon-shine"></div>
              </div>
              
              <h3>{service.title}</h3>
              <div className="card-divider"></div>
              <p>{service.description}</p>
              
              <div className="card-number">0{index + 1}</div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to bring your project to life?</h3>
            <p>Let's collaborate and create something amazing together</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;