import React, { Component } from 'react';
import "../styles/navbar.css"
import logo from '../resources/Jett.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        const MenuItems = [
            {
                title: 'Home',
                url: '/',
                cName: 'nav-links'
            },
            {
                title: 'Experience',
                url: '/Experience',
                cName: 'nav-links'
            },
            {
                title: 'Projects',
                url: '/Projects',
                cName: 'nav-links'
            },
            {
                title: 'Contact',
                url: '/Contact',
                cName: 'nav-links'
            },
        ]
        return(
            <nav className="NavbarItems">
                <div className="navbar-stamp">
                    <img style={{ width: 60, height: 55}} src={logo} alt=""/> 
                    <div style={{fontSize: 35}}>Stanley Cao</div>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} />
                </div>
                <div className="pages">
                <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
