import React from 'react';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';
import Sidebar from './components/Sidebar.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebar glass"><Sidebar /></div>
          <div className="col-8 main glass"><Main /></div>
        </div>
      </div>

      <div className="foot col-11">
        <Footer />
      </div>
    </div>
  );
}

export default App;
