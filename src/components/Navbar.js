import React from 'react';
import './Navbar.css';
import logo from '../ceoehis.png';

function Navbar() {
  return (
    <header>
      <div className="layout-grid">
        <div className="navbar-grid">
          <img src={logo} alt="logo" />
          <ul>
            <li><a>About</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Blog</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar;