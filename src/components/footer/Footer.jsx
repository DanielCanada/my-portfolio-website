import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer_logo'>Portfolio</a> */}

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#myprojects">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.facebook.com/daniel.canada.18/"><BsFacebook /></a>
      <a href="https://www.instagram.com/danescheesee/"><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/danielpca%C3%B1ada/"><BsLinkedin /></a>
      <a href="https://github.com/DanielCanada"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DanielCañada. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer