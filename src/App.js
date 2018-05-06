import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import scrollTo from './utils/animatedScroll';

function scrollUp() {
  scrollTo(0, 1250);
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      shouldShowScrolllTopArrow: false
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        this.setState({
          shouldShowScrolllTopArrow: true
        })
      }
      else {
        this.setState({
          shouldShowScrolllTopArrow: false
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        {this.state.shouldShowScrolllTopArrow && <i onClick={scrollUp} className="fa fa-angle-double-up animated bounce"></i>}
      </div>
    );
  }
}

export default App;
