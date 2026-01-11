import React from 'react';
import './Portfolio.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

function Portfolio() {

  const projects = [
    // --- NEW PROJECTS ---
    {
      id: 1,
      title: "CareLink Health System",
      category: "ASP.NET Core & Vite",
      image: "careLink.jpg", 
      description: "A web platform for community health centers to manage patient records, medicine inventory, and appointments, improving preventive care accessibility.",
      github: "https://github.com/Nirmal2002Cn/CareLink-Community-Health-System",
      demo: "#" 
    },
    {
      id: 2,
      title: "Supply Chain Analytics",
      category: "Business Intelligence",
      image: "supply_chain.jpg", 
      description: "A 'Control Tower' dashboard analyzing global logistics data to identify shipping inefficiencies, cost drivers, and vendor performance in real-time.",
      github: "https://github.com/Nirmal2002Cn/Global-Supply-Chain-Analytics",
      demo: "#"
    },
    {
      id: 3,
      title: "Customer Segmentation",
      category: "Data Analytics",
      image: "Dashboard_Screenshot.png", 
      description: "End-to-end analysis using clustering techniques to segment customers by purchasing behavior, enabling targeted marketing and retention strategies.",
      github: "https://github.com/Nirmal2002Cn/End-to-End-BI-Customer-Segmentation",
      demo: "#"
    },
    // --- PREVIOUS PROJECTS ---
    {
      id: 4,
      title: "OneFold E-Commerce",
      category: "MERN Stack",
      image: "onefold.jpg", 
      description: "A comprehensive clothing store featuring user authentication, product management, and a seamless shopping cart experience built with MongoDB, Express, React, and Node.",
      github: "https://github.com/Nirmal2002Cn/OneFold",
      demo: "#" 
    },
    {
      id: 5,
      title: "University Medical Center",
      category: "Web Application",
      image: "medical.jpeg", 
      description: "A health center management system allowing students to book appointments and doctors to securely store records and track medicine inventory.",
      github: "https://github.com/Nirmal2002Cn/UWU_Medical",
      demo: "#"
    },
    {
      id: 6,
      title: "Edunet Mailing System",
      category: "Internal Communication",
      image: "edunet.png", 
      description: "An internal university mailing system enabling lecturers to send targeted emails to specific departments or student groups without manual filtering.",
      github: "https://github.com/YOUR_USERNAME/edunet", // Note: You might want to update this URL if you have the link now
      demo: "#"
    },
    {
      id: 7,
      title: "Airbnb Data Analysis",
      category: "Tableau & BI",
      image: "airbnb.png", 
      description: "Interactive dashboard visualizing Airbnb rental trends, pricing models, and occupancy rates to identify profitable investment areas.",
      github: "https://github.com/Nirmal2002Cn/Airbnb-Data-Analysis-Tableau",
      demo: "#"
    },
    {
      id: 8,
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
                 {/* Ensure these images exist in your public/assets folder */}
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