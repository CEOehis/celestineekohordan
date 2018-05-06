import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
