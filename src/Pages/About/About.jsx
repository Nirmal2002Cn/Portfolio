import React from 'react'
import './About.css';
import BackToHome from '../../components/BackToHome/BackToHome';
import ExperienceSec from '../../components/ExperienceSec';

function About() {
  return (
   <section className='about-section'>
    
        <p className='section-label-green-a'>ABOUT ME</p>
   



        <h1 className='main-title'>Get to Know Me <span className='green'>Better</span></h1>
        <div className='about-experience'>
          <ExperienceSec />
             
        <BackToHome/>


        </div>


   </section>
  )
}

export default About