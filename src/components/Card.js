import React from 'react';
import './Card.css';

function Card({ title, link }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <a
                className="Proj-link"
                href={link}
            >
                <img src="" alt="project screenshot" />
            </a>
            <p className="description"></p>
        </div>
    )

}

export default Card