import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Sidebar from './components/Sidebar.js';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 sidebar glass">
              <Sidebar />
            </div>
            <div className="col-8 glass">
              <Main />
            </div>
          </div>
        </div>

        <div className="foot">
          <Footer />
        </div>
      </div>
    </Router>

  );
}

export default App;
