import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink exact activeClassName="active" to="/projects">
                Projects
            </NavLink>
            <NavLink exact activeClassName="active" to="/resume">
                Resume
            </NavLink>
            <NavLink exact activeClassName="active" to="/contact">
                Contact
            </NavLink>
        </nav>
    );

}

export default Navbar