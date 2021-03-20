import React from 'react';
import Card from '../card/Card';
import './Projects.css'

function Projects() {
    return (
        <div className="Project-section" href="#projects">
            <Card title="Project 1" link="http://" />
            <Card title="Project 2" link="http://" />
            <Card title="Project 2" link="http://" />
            <Card title="Project 2" link="http://" />
        </div>
    )
}

export default Projects