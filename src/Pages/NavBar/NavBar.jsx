
import { href } from 'react-router-dom';
import'./Nav.css';
import React,{ useState} from 'react';



function NavBar() {
  const [menuOpen, setMenuOpen] =useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); 
    }
  }


  return (
    <div className="navbar">
      <div className='logo-container'>
        <img className="logo"src="logo.png" alt="logo" />
      </div>

   <div className='menu-icon' onClick= {() =>setMenuOpen(!menuOpen)}>
      <img className='menu'src="menu.svg" alt="menu" />
   </div>


      <div className= {`list ${menuOpen ?'active':''}`}>
         <a className="nav-link" href="#home" onClick={closeMenu}>Home</a>
         <a className="nav-link" href="#about"onClick={closeMenu}>About</a>
         <a className="nav-link" href="#services"onClick={closeMenu}>Services</a>
          <a className="nav-link" href="#portfolio"onClick={closeMenu}>Portfolio</a>
          <a className="nav-link" href="#contact"onClick={closeMenu}>Contact</a>
</div>

      
      <div className='button-container'>
        <button onClick={scrollToContact}>Let's Talk</button>
      </div>
      
    </div>
  )
}

export default NavBar