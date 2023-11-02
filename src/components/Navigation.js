import React, { useState, useEffect } from 'react';
import "../styles/navigation.css";
import logo from '../resources/Jett.png';
import { Navbar, Container, Nav } from "react-bootstrap";

const MobileNavbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <nav className="reactive-navbar">
      <div className="navbar-links">
        <ul className="nav-items">
          <li className="nav-pages"><img className="jett" src={logo} style={{ width: 60, height: 55}} alt=""/></li>
          <li className="nav-pages"><Nav.Link href="/">HOME</Nav.Link></li>
          <li className="nav-pages"><Nav.Link href="/#/Experience">EXPERIENCES</Nav.Link></li>
          <li className="nav-pages"><Nav.Link href="/#/Projects">PROJECTS</Nav.Link></li>
          <li className="nav-pages"><Nav.Link href="/#/Contact">CONTACT</Nav.Link></li>
        </ul>
      </div>
      <a href="#" className="toggle-button" onClick={() => setOpenNavbar(!openNavbar)}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </a>
      <div className="site-name">Stanley Cao </div>
      {windowWidth <= 1000 && openNavbar && (
        <div className="navbar-links-active">
          <ul className="nav-items">
            <li className="nav-pages"><Nav.Link href="/">HOME</Nav.Link></li>
            <li className="nav-pages"><Nav.Link href="/#/Experience">EXPERIENCES</Nav.Link></li>
            <li className="nav-pages"><Nav.Link href="/#/Projects">PROJECTS</Nav.Link></li>
            <li className="nav-pages"><Nav.Link href="/#/Contact">CONTACT</Nav.Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;