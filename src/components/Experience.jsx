import React from 'react'
import '../styles/experience.css'
import {FiCheckCircle} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="FrontEnd">
          <h3>Frontend Development</h3>
          <div className="content">
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="BackEnd">
          <h3>BackEnd Development</h3>
          <div className="content">
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>C</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="details">
              <FiCheckCircle className="icon"/>
              <div>
                <h4>Java</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="Featured">
          <h3>Featured</h3>
          <div className="content1">
            <article className="details">
              <div>
                <h4>Kevares Autonomous Services</h4>
                <small font color='black'>FrontEnd Developer <br></br></small>
                <small className='text-light'>TLDR: Improved landing page searchability in WordPress through SEO strategies, 
                optimized call-to-action elements for clear presentation, and successfully 
                managed website launches. </small>
              </div>
            </article>
            <article className="details">
              <div>
                <h4>CSS Office Solutions</h4>
                <small font color='black'>WebPage Developer <br></br></small>
                <small className='text-light'>TLDR: Collaborated with front-end peers to document ongoing AI projects 
                and worked with the team to enhance the user interface of the Sidewalk Inspection AI. </small>
              </div>
            </article>
            <article className="details">
              <div>
                <h4>Future of Engagement</h4>
                <small font color='black'>Marketing/Fundraising Intern <br></br> </small>
                <small className='text-light'>TLDR: Designed and created Media Pieces for the companies Political Campaigns.
                Afterwards, Filmed, Scripted, and Edited posts and videos for Social Media platforms, Tiktok and Twitter.</small>
              </div>
            </article>
          </div>
        </div>

        <div className="Extracurriculars">
          <h3>Extra Curriculars</h3>
          <div className="content1">
            <article className="details">
              <div>
                <h4>Western University Korean Student Association</h4>
                <small font color='black'>Marketing/Social Media Executive <br></br></small>
                <small className='text-light'>TLDR: Designed Instagram Posts on Canva, advertised club events, and managed social media platforms. </small>
              </div>
            </article>
            <article className="details">
              <div>
                <h4>CS Undergraduate Society</h4>
                <small font color='black'>Internals Executive/Web Developer<br></br></small>
                <small className='text-light'>TLDR: Designed and implemented website updates using Javascript, HTML/CSS, and React.js. 
                Managed events for executive members, scheduling and organizing meets. </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience