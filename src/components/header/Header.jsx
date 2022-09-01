import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HandleSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there! I'm</h5>
        <h1>Daniel Peter Cañada</h1>
        <h5 className="text-light">Computer Engineer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
            
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header