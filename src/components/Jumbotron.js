import React from 'react';
import './Jumbotron.css';
import scrollTo from '../utils/animatedScroll';


function scrollDown() {
  scrollTo(window.innerHeight, 1250);
}

function Jumbotron() {
  return (
    <main className="layout-grid">
      <div className="jumbotron">
        <div>
          <h1 className="intro animated fadeInDown">Hello! I'm Celestine.</h1>
          <p className="animated fadeIn">Javascript developer. FOSS enthusiast</p>
          <div className="social-icons animated slideInLeft">
            <a href="https://github.com/ceoehis"><i className="fa fa-github" /></a>
            <a href="https://freecodecamp.org/ceoehis"><i className="fa fa-free-code-camp"></i></a>
            <a href="https://stackoverflow.com/users/8658018/ceoehis"><i className="fa fa-stack-overflow"></i></a>
            <a href="https://www.linkedin.com/in/celestine-ekoh-ordan-a3427213a/"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <i onClick={scrollDown} className="fa fa-angle-double-down animated bounce infinite"></i>
      </div>
    </main>
  )
}

export default Jumbotron;