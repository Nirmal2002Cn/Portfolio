import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio-full-section' >
        <h1 className='title'>PORTFOLIO</h1>
        <h1 className='main-title-p'>Some of My <span className='green'>Finest Work</span></h1>


        <div className='portfolio-grid'>
          <div className='portfolio-card'>
            <img src="p1.webp" alt="Portfolio 1" className='portfolio-image' />
            <h3>Project Title 1</h3>
            <p>Short description of the project.</p>
          </div>

          <div className='portfolio-card'>
            <img src="p2.jpg" alt="Portfolio 2" className='portfolio-image' />
            <h3>Project Title 2</h3>
            <p>Short description of the project.</p>
          </div>

          <div className='portfolio-card'>
            <img src="p3.jpg" alt="Portfolio 3" className='portfolio-image' />
            <h3>Project Title 3</h3>
            <p>Short description of the project.</p>
          </div>

          <div className='portfolio-card'>
            <img src="p4.jpg" alt="Portfolio 4" className='portfolio-image' />
            <h3>Project Title 4</h3>
            <p>Short description of the project.</p>
          </div>



        </div>
        </section>
  )
}

export default Portfolio