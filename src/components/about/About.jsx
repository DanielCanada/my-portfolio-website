import React from 'react'
import './About.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {RiTeamFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <div className="container header__container">
        <h5>Hello there! I'm</h5>
        <h1>Daniel Peter Cañada</h1>
        <h5 className="text-light">Computer Engineer</h5>
      </div>
    
      <br />
      <br />

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        

        <div className="about__content">
        <h2>About Me</h2>
          <p>
            {'\t'}I am Daniel from Bacolod City. A Computer Engineering fresh graduate at the University of St. La Salle - Bacolod. I became External Vice President of ICpEP.se USLS from mid 2019 to May 2021 and made Dean's List in the AY 2020 - 2021 and AY 2021 - 2022. Interested in Software and Application Development, UI/UX Design, and Networking. A solution-oriented and adaptive individual committed to service and team coordination to achieve deliverables.
          </p>

          <div className="about__cards">
            <article className='about__card'>
              <FaUserGraduate className='about_icon'/>
              <h5>Education</h5>
              <small>BS Computer Engineering - University of St. LaSalle (2018-2022)</small>
              <br></br>
              <small>more info in CV...</small>
            </article>
            <article className='about__card'>
              <RiTeamFill className='about_icon'/>
              <h5>Experience and Affiliations</h5>
              <small>Online OJT (USLS Bacolod)</small>
              <br></br>
              <small>ICpEP.se Club Officer</small>
              <br></br>
              <small>and more in CV...</small>
            </article>
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Academic Achievements</h5>
              <small>Dean's List (3rd Year and 4th Year College)</small>
              <br></br>
              <small>With Honors (Senior High School - Liceo De La Salle)</small>
            </article>
          </div>
          <CTA />
          {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
      
    </section>
  )
}

export default About