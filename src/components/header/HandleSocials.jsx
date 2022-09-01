import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HandleSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/danielpca%C3%B1ada/"><BsLinkedin /></a>
      <a href="https://github.com/DanielCanada"><BsGithub /></a>
      <a href="https://www.facebook.com/daniel.canada.18/"><BsFacebook /></a>
    </div>
  )
}

export default HandleSocials