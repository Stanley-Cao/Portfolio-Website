import React from 'react'
import '../styles/projects.css'
import IMG1 from '../resources/Loading.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>What I have Done</h5>
      <h2>Projects</h2>

      <div className="container projects_container">
        <article className='projectItems'>
          <div className="projImage">
            <img src={IMG1} alt="" />
          </div>
          <h3>Western University Map Navigator</h3>
          <small font color='black'>Java | JavaFX | JUnit <br></br></small>
          <small className='text-light'>An application designed for users to navigate around Western University campus, 
          create POIs and view inside campus buildings.</small>
          <div className="button">
            <a href="" className='btn'>Coming Soon</a>
          </div>
        </article>

        <article className='projectItems'>
          <div className="projImage">
            <img src={IMG1} alt="" />
          </div>
          <h3>Boba To-Do</h3>
          <small font color='black'>Swift | Xcode | iOS App <br></br></small>
          <small className='text-light'>A Boba themed app that lets users note down the tasks for the week, with reminders 
          and ability to track finished and unfinished tasks.</small>
          <div className="button">
            <a href="" className='btn'>Coming Soon</a>
          </div>
        </article>

        <article className='projectItems'>
          <div className="projImage">
            <img src={IMG1} alt="" />
          </div>
          <h3>Board Game (Western Wonderland)</h3>
          <small font color='black'>SFML | C++ | Project <br></br></small>
          <small className='text-light'>A board game inspired by the Game of Life. Allows players to experience 
          the student life of Western University whilst trying to balance out their personal life.</small>
          <div className="button">
            <a href="" className='btn'>Coming Soon</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects