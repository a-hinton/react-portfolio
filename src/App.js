import React from 'react';
import Contact from './components/contactForm/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 sidebar glass">Sidebar</div>
          <div className="col-8 main glass">Main</div>
        </div>
      </div>
      
      

      {/* <Header />
      <Navbar />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
