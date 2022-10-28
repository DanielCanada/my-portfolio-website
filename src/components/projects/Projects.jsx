import React from 'react'
import './projects.css'
import HT from '../../assets/HT.jpg'
import OJT01 from '../../assets/OJT01.png'
import WEB99 from '../../assets/web-track.jpg'
import WEB01 from '../../assets/Web01.jpg'
import WEB02 from '../../assets/BakeryUIX.jpg'

const Projects = () => {
  return (
    <section id='myprojects'>
      <h5>My Works and Designs</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB01} alt="" />
          </div>
            <h3>Mashiso Inventory System UIX using InVision Studio</h3>
            <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/18dddyKhv1o7Y7Hg5fs2gpuWvfTiM-Ypy?usp=sharing" className="btn">Mobile UIX Files</a>
            <a href="https://drive.google.com/drive/folders/1Eb_xVoG7P4ASYTZHqBT4CEdeoWYhl5VN?usp=sharing" className="btn btn-primary">Web UIX Files</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB02} alt="" />
          </div>
            <h3>Midterm Project: Bakery UIX using InVision Studio</h3>
            <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1TGvACL-znfdn0ar2ScW0qMnhEE44hcAh?usp=sharing" className="btn">Mobile UIX Files</a>
            <a href="https://drive.google.com/drive/folders/100f_qQjHEsVtiyrflhSCFRgqohyW70bQ?usp=sharing" className="btn btn-primary">Web UIX Files</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB99} alt="" />
          </div>
            <h3>Personal Expenses Tracker using MERN Stack (Web) and Flutter (Mobile)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/DanielCanada/SideProject01/tree/master/iris_management_app" className="btn">Github (Mobile Version)</a>
            {/* <a href="https://manage-iris-web.herokuapp.com/" className="btn btn-primary">Live Demo</a> */}
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={OJT01} alt="" />
          </div>
            <h3>Contacts App - Online OJT Development using Flutter with MongoDB</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/AY2020-2021-CpE-OJT/CanadaW5-APP" className="btn">Github</a>
            {/* <a href="https://manage-iris-web.herokuapp.com/" className="btn btn-primary">Live Demo</a> */}
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HT} alt="" />
          </div>
            <h3>Side Project 03: Modified HT App (based from Habit tracker App by Mitch Koko)</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/DanielCanada/SP03_ModifiedHT" className="btn">Github</a>
            {/* <a href="https://manage-iris-web.herokuapp.com/" className="btn btn-primary">Live Demo</a> */}
            </div>
        </article>
      </div>
    </section>
  )
}

export default Projects