import React from 'react';
import Photo from '../assets/images/designer-girl.svg';
import Github from '../assets/icons/github-sign.png';
import LinkedIn from '../assets/icons/linkedin-logo.png';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar-elements sidebar-item">
            <img src={ Photo } alt="Coder Logo" className="image" />
            <div className="sidebar_item name">Alexandra<span>Hinton</span></div>
            <div className="sidebar_item title">Fullstack Developer</div>
            <a href="">
                <button className="sidebar_item">
                    Download Resume
                </button>
            </a>

            <figure className="sidebar_item social-icons">
                <a href="" target="_blank"><img src={ Github } alt="Github logo" className="icon"/></a>
                <a href="www.linkedin.com/in/alexandrakhinton" target="_blank"><img src={ LinkedIn } alt="LinkedIn logo" className="icon"/></a>
            </figure>

            <div className="sidebar_item contact">
                E-mail: <span>alexandra.k.hinton1@gmail.com</span> 
            </div>
        </div>
    )

}

export default Sidebar