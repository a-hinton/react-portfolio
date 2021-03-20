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
      <Header />
      <Navbar />
      <Sidebar />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
