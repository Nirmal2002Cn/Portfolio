import React from 'react'
import './Services.css';

function Services() {
  return (
    <section className='service-section' > 

        <p className='section-label-green'>SERVICES</p>
        <h1 className='main-title'>What I <span className='green'>DO</span></h1>
        

    <div className='services-grid'>
      <div className='service-card'>
        <img src="web-design.svg" alt="Web Design" className='service-icon' />
        <h3>Web Design</h3>
        <p>We work with professionals and leaders who want to build careers that fulfill them intellectually and financially.</p>
      </div>

      <div className='service-card'>
        <img src="web-devalop.svg" alt="Web Devalopment" className='service-icon' />
        <h3>Web Devalopment</h3>
        <p>We work with professionals and leaders who want to build careers that fulfill them intellectually and financially.</p>
      </div>
    

      <div className='service-card'>
        <img src="seo.svg" alt="SEO " className='service-icon' />
        <h3> SEO</h3>
        <p>We work with professionals and leaders who want to build careers that fulfill them intellectually and financially.</p>
      </div>
    
    
    


    </div>


    </section>
  )
}

export default Services



