import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './About';
import Navbar from './Navbar';
import Projects from './Projects';
import './Main.css';

function Main() {
    return (
        <Router>
            <div className="nav-container">
                <Navbar />
            </div>

            <Switch> {/* once a matching path is found, switch breaks and allows the page to route */}
                <Route exact path="/">
                    <About />
                </Route>

                <Route exact path="/projects">
                    <Projects />
                </Route>

                <Route>
                    <Redirect to="/" />
                </Route>
            </Switch>

        </Router>

    )

}

export default Main