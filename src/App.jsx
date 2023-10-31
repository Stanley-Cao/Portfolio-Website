import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'



const app = () => {
  return (
    <div>
      <Router basename={"/portfolio"}>
        <Navbar />
        <Routes>
          <Route path="/portfolio" exact element={<About/>}/> 
          <Route path="/portfolio/Experience" exact element={<Experience/>}/>
          <Route path="/portfolio/Projects" exact element={<Projects/>}/>
          <Route path="/portfolio/Contact" exact element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default app