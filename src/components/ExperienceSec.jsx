
import './Experience.css'
import React,{useState} from 'react'

function ExperienceSec() {
    
    const [activeTab,setActiveTab] = useState('experience');

    const experienceData = [
        {
            title:"Web & Ui Educator",
            company:'Code Academy',
            duration:'2024 - Present',
            description:'Teaching web development and UI design to students, focusing on practical skills and real-world applications.'
        },
        {
            title:"Web Developer",
            company:'Code Academy',
            duration:'2023 - 2024',
            description:'Developed and maintained web applications, ensuring high performance and responsiveness.'
        },
        {
            title:"Intern",
            company:'Code Academy',
            duration:'2022 - 2023',
            description:'Assisted in web development projects, gaining hands-on experience in coding and design.'
        },
        {
            title:"Intern",
            
            company:'Code Academy',
            duration:'2021 - 2022',
            description:'Gained practical experience in web development and design, contributing to various projects.'
        }
        
    ];
    
  return(
    <section className='experience-wrapper'>
        <div className='tabs'>
            
            <button 
                className={`tab ${activeTab == 'experience' ? 'active' :''}`}
                onClick={() => setActiveTab('experience')} >
                EXPERIENCE <span>01</span>
            </button>

            <button 
                className={`tab ${activeTab == 'skills' ? 'active':''}`}
                onClick={() => setActiveTab('skills')}
                >
                SKILLS <span>02</span>
            </button>
            <button
                className={`tab ${activeTab == 'education' ? 'active':''}`}
                onClick={() => setActiveTab('education')}
                >
                EDUCATION <span>03</span>
            </button>
        </div>

        {activeTab === 'experience' && (
            <div className='experience-grid'>

                
                {experienceData.map((item,index) =>(
                    <div className='experience-card' key={index}>

                        <div className='timeline-dot'/>

                        <h3>{item.title}</h3>

                        <p className='company'>{item.company}</p>
                        <span className='duration'>{item.duration}</span>
                        <p className='desc'>{item.description}</p>
                    </div>
                    


                ))}

            </div>
        )}



        {activeTab ==="skills" && (
            <div className='skills-content'>
                <p>HTML,JAVASCRIPT,REACT,UI DESIGN,GIT</p>
            </div>
        )}

        {activeTab === "education" && (
            <div className='education-content'>
                <p>B. Tech in ICT - Uva Wellassa University</p>
                </div>

        )}







    </section>
        






    
    
  );
}

export default ExperienceSec