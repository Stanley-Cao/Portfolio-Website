import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import {HashRouter} from 'react-router-dom';
import Contact from './components/Contact';


class App extends React.Component {
  render(){
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<About/>}/> 
          <Route path="/Experience" exact element={<Experience/>}/>
          <Route path="/Projects" exact element={<Projects/>}/>
          <Route path="/Contact" exact element={<Contact/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}
}

export default App;