import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [active, setActive] = useState('');

    useEffect(() => {
        let url = window.location.href; //grab the active URL from the window element

        if (url.endsWith('/'))
            setActive('About');
        else if (url.endsWith('/projects'))
            setActive('Projects');
        else
            setActive('About')
    })

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

                {active !== 'Projects' ?
                    <Link to="/projects">
                        <div className="navbar_item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link> : null
                }
            </div>
        </nav>
    );

}

export default Navbar