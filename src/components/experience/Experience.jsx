import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills do I have</h5>
      <h2>My Experiences and Skills</h2>

      <div className="container experience__container">
        <div className="experience__mobile-web">
          <h3>Mobile/Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Flutter Development</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java - Android Studio</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MERN Stack (MongoDB, Express, React, Node.js)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__programming-lang">
        <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML & CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__design">
        <h3>UI/UX Design</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>InVision Studio</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Figma</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Webflow</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__others">
        <h3>Database Design and API Documentation + Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>AWS (DynamoDB & Lambda)</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SwaggerHub</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Google Suite, MS Office</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Git / Github</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Docker</h4>
              <small className="text-light">Novice</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience