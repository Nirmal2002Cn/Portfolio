import React from 'react'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import NavBar from './Pages/NavBar/NavBar'
import './App.css'
function App() {
  return (
    <div>
       
        <section id='home' className='home'>
             <Home />
        </section>
       
        <section id='about' className='about'>
            <About />
        </section>
        <section id='services' className='services'>
            <Services />
        </section>
        <section id='portfolio' className='portfolio'>
            <Portfolio />
        </section>
        <section id='contact' className='contact'>
            <Contact />
        </section>
        <section id='footer' className='footer'>
            <Footer/>
        </section>
    </div>
  )
}

export default App