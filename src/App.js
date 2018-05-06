import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
      </div>
    );
  }
}

export default App;
