import React from 'react'
import '../styles/about.css'
import CTA from './CTA'
import Avatar from '../resources/Avatar.png'
import Socials from './Socials'

const about = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello! I'm</h3>
        <h1>Stanley Cao</h1>
        <h5 className="text-light"> Full Time Student and Tech Enthusiast</h5>

        <div className = "Body">
        Hi, my name is Stanley and am currently in my third year of Computer Science at Western University. <br />
        Having started out in Medical Sciences at Western, I transitioned to Computer Science as I took <br />
        interest in the technical industry. {'\n'}
        </div>

        <div className = "Body2">
        Building a curiosity in creating products and designing software pushed me to follow this <br />
        passion. I am currently interested in web designing, software engineering, and AI development. <br />
        But look towards new opportunities everyday. 
        </div>

        <div className="avatar">
          <img src={Avatar} alt=""/>
        </div>

        <CTA />
        <Socials/>
      </div>
    </header>
  )
}

export default about