import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';

function Home() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection){
      contactSection.scrollIntoView({ behavior : 'smooth'});
    }
  }
  return (
    <section >
       <NavBar />
    <div className='hometext'>
        <h1>Hi ,I'm</h1>
        <h1 className='bigT'>Chamila Nirmal</h1>
        <h1>I'm a Designer</h1>
        
    </div>
    <div className='para'>
            <p>We work with professionals and leaders who want to build careers that fulfill  </p>
            <p>them intellectually and financially</p>
    
        </div>
        
            <button className='btn' onClick={scrollToContact}>Contact Now</button>
    

            <img  className="BGimg" src="bgimg.png" alt="Background Image" />
    </section>
     
  )
    
}

export default Home