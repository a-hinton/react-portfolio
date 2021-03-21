import React from 'react';
import Contact from './Contact.js';
import Github from '../assets/icons/github-sign.png';
import LinkedIn from '../assets/icons/linkedin-logo.png';
import './Sidebar.css';

function Sidebar() {
    return (
        <div>
            <img src="" alt="" />
            <div className="sidebar_name">Alexandra <span>Hinton</span></div>
            <div className="sidebar_item title">Fullstack Developer</div>
            <a href="">
                <div className="sidebar_item">
                    <img src="" alt="" />Download Resume
                </div>
            </a>

            <figure className="social-icons">
                <a href=""><img src={ Github } alt="Github logo" className="icon"/></a>
                <a href="www.linkedin.com/in/alexandrakhinton"><img src={ LinkedIn } alt="LinkedIn logo" className="icon"/></a>
            </figure>

            <div className="contact">
                <Contact />
            </div>
        </div>
    )

}

export default Sidebar