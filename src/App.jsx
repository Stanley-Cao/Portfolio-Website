import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<About/>}/> 
          <Route path="/Experience" exact element={<Experience/>}/>
          <Route path="/Projects" exact element={<Projects/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;