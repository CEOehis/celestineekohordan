import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
