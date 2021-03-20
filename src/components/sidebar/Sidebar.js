import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li id="home">Home</li>
                <li id="projects">Projects</li>
                <li id="resume">
                    <a href="https" target="_blank">Resume</a>
                </li>
                <li id="">Contact</li>
            </ul>
        </div>
    )

}

export default Sidebar