import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1gElGW-Ah3CyH5v0oCjcq3UCqb_-K6sk0/view?usp=sharing" className='btn' target="_blank" rel="noopener noreferrer">Resume</a>
        <Link to="/Contact" className = 'btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA