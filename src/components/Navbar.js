import React from 'react';
import './Navbar.css';
import logo from '../ceoehis.png';
import logo2 from '../ceoehis-icon.png';
import scrollTo from '../utils/animatedScroll';

function scroller(e) {
  let link = e.target.attributes.href.value;
  e.preventDefault();
  scrollTo(document.querySelector(link).offsetTop, 1250);
}

function Navbar() {
  return (
    <header>
      <div className="layout-grid">
        <div className="navbar-grid">
          <img src={window.innerWidth > 650 ? logo : logo2 } alt="logo" />
          <ul>
            <li><a onClick={scroller} href="#about">About</a></li>
            <li><a onClick={scroller} href="#portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar;