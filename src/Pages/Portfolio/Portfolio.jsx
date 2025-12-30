import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "OneFold E-Commerce",
      category: "MERN Stack",
      image: "onefold.jpg", 
      description: "A comprehensive clothing store featuring user authentication, product management, and a seamless shopping cart experience built with MongoDB, Express, React, and Node.",
      github: "https://github.com/Nirmal2002Cn/OneFold",
      demo: "#" 
    },
    {
      id: 2,
      title: "University Medical Center",
      category: "Web Application",
      image: "medical.jpeg", 
      // Updated Description: Appointments, Record Safety, Staff Access, Medicine Counting
      description: "A health center management system where students can book appointments for medical reports. It allows doctors to securely store student records, gives medical staff access privileges, and includes a medicine inventory tracking feature.",
      github: "https://github.com/Nirmal2002Cn/UWU_Medical",
      demo: "#"
    },
    {
      id: 3,
      title: "Edunet Mailing System",
      category: "Internal Communication",
      image: "edunet.png", 
      // Updated Description: Mailing system, Department selection
      description: "An internal university mailing system designed for efficient communication. It enables lecturers to easily send targeted emails to specific departments or student groups without manual filtering.",
      github: "https://github.com/YOUR_USERNAME/edunet",
      demo: "#"
    },
    {
      id: 4,
      title: "Airbnb Data Analysis",
      category: "Tableau & BI",
      image: "airbnb.png", 
      description: "Interactive dashboard visualizing Airbnb rental trends, pricing models, and occupancy rates to identify profitable investment areas.",
      github: "https://github.com/Nirmal2002Cn/Airbnb-Data-Analysis-Tableau",
      demo: "#"
    },
    {
      id: 5,
      title: "Bike Sales Dashboard",
      category: "Excel Dashboard",
      image: "bikeSale.jpg", 
      description: "End-to-end data analysis project using Excel pivot tables and charts to track sales performance and customer demographics.",
      github: "https://github.com/Nirmal2002Cn/excel-bike-sales-dashboard",
      demo: "#"
    }
  ];

  return (
    <section className='portfolio-full-section' id="portfolio">
        
        {/* Header */}
        <div className="portfolio-header">
            <p className='section-label-green'>
                PORTFOLIO
            </p>
            <h1 className='main-title-p'>
                My Recent <span className='green'>Projects</span>
            </h1>
            <div className="title-underline"></div>
        </div>

        <div className='portfolio-grid'>
          {projects.map((project, index) => (
            <div 
                className='portfolio-card' 
                key={project.id}
                style={{ animationDelay: `${index * 0.1}s` }}
            >
              
              <div className="image-wrapper">
                 <img src={project.image} alt={project.title} className='portfolio-image' />
                 <span className="category-badge">{project.category}</span>
              </div>

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="card-buttons">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-code">
                    <FaGithub style={{marginRight: '8px'}}/> GitHub
                  </a>
                  
                  {project.demo !== "#" && (
                     <a href={project.demo} target="_blank" rel="noreferrer" className="btn-demo">
                       <FaExternalLinkAlt style={{marginRight: '8px'}}/> Demo
                     </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
    </section>
  )
}

export default Portfolio;