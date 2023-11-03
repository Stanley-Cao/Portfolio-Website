import React, { useState, useEffect } from 'react';
import "../styles/navigation.css";
import logo from '../resources/Jett.png';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [url, setUrl] = useState("#")

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <nav className="reactive-navbar">
      <div className="navbar-links">
        <ul className="nav-items">
          <li className="nav-pages"><img className="jett" src={logo} style={{ width: 60, height: 55}} alt=""/></li>
          <li className="nav-pages"><Link to="/">HOME</Link></li>
          <li className="nav-pages"><Link to="/Experience">EXPERIENCES</Link></li>
          <li className="nav-pages"><Link to="/Projects">PROJECTS</Link></li>
          <li className="nav-pages"><Link to="/Contact">CONTACT</Link></li>
        </ul>
      </div>
      <Link to={url} className="toggle-button" onClick={(event) => {event.preventDefault(); setOpenNavbar(!openNavbar);}}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </Link>
      <div className="site-name">Stanley Cao </div>
      {windowWidth <= 1000 && openNavbar && (
        <div className="navbar-links-active">
          <ul className="nav-items">
            <li className="nav-pages" onClick={() => {setUrl("/")}}><Link to="/" onClick={() => {setOpenNavbar(!openNavbar)}}>HOME</Link></li>
            <li className="nav-pages" onClick={() => {setUrl("/Experience")}}><Link to="/Experience" onClick={() => {setOpenNavbar(!openNavbar)}}>EXPERIENCES</Link></li>
            <li className="nav-pages" onClick={() => {setUrl("/Projects")}}><Link to="/Projects" onClick={() => {setOpenNavbar(!openNavbar)}}>PROJECTS</Link></li>
            <li className="nav-pages" onClick={() => {setUrl("/Contact")}}><Link to="/Contact" onClick={() => {setOpenNavbar(!openNavbar)}}>CONTACT</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;