import React, { useState } from 'react';
import './Experience.css';

function ExperienceSec() {

  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Tableau', img: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
    { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
    { name: 'Git & GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  ];

  return (
    <div className="experience-wrapper">

      <div className="tabs">
        <button className={`tab ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>SKILLS</button>
        <button className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>EDUCATION</button>
        <button className={`tab ${activeTab === 'certifications' ? 'active' : ''}`} onClick={() => setActiveTab('certifications')}>CERTIFICATIONS</button>
        <button className={`tab ${activeTab === 'activities' ? 'active' : ''}`} onClick={() => setActiveTab('activities')}>ACTIVITIES</button>
      </div>

      {/* SKILLS */}
      {activeTab === 'skills' && (
        <div className="skills-grid fade-in">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* EDUCATION */}
      {activeTab === 'education' && (
        <div className="content-box fade-in">
          <h3>Bachelor of Information & Communication Technology (Business Intelligence)</h3>
          <p>Uva Wellassa University of Sri Lanka</p>
          <span>2022 – Present</span>

          <hr />

          <h3>G.C.E. Advanced Level</h3>
          <p>Miyurapada Central College, Narammala</p>
          <span>Completed</span>
        </div>
      )}

      {/* CERTIFICATIONS */}
      {activeTab === 'certifications' && (
        <div className="content-box fade-in">
          <h3>Python Programming</h3>
          <p>University of Moratuwa</p>

          <h3>Python for Beginners</h3>
          <p>University of Moratuwa</p>

          <h3>Web Design for Beginners</h3>
          <p>University of Moratuwa</p>
        </div>
      )}

      {/* ACTIVITIES */}
      {activeTab === 'activities' && (
        <div className="content-box fade-in">
          <h3>Mentor – UWU Cyber Security Hub</h3>
          <p>Mentored junior students and supported cyber security learning activities.</p>

          <h3>Cyber Awareness Contributor</h3>
          <p>Participated in university cyber awareness programs promoting safe technology usage.</p>
        </div>
      )}

    </div>
  );
}

export default ExperienceSec;
