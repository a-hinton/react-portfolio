import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('About');

    return (
        <nav className="navbar">
            <div className="navbar_active">
                {active}
            </div>

            {/* On selection of navigation item, selected item disappears from list and
            is displayed as 'active' element */}
            <div className="navbar_items">
                {active !== 'About' &&
                    <Link to="/">
                        <div className="navbar_item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }

                {active !== 'Resume' ?
                    <Link to="/resume">
                        <div className="navbar_item" onClick={() => setActive('Resume')}>Resume</div>
                    </Link> : null
                }

                {active !== 'Projects' &&
                    <Link to="/projects">
                        <div className="navbar_item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>
                }
        
            </div>
        </nav>
    );

}

export default Navbar