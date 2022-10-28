import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {FaFacebookMessenger} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d41ekqj', 'template_uemtdfv', form.current, 'VuK3hFexzYbEOOF2O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danielpeter.canada@gmail.com</h5>
            <a href="mailto:danielpeter.canada@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Daniel Cañada</h5>
            <a href="https://m.me/daniel.canada.18/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact