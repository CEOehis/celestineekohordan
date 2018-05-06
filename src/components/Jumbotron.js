import React from 'react';
import './Jumbotron.css';

function Jumbotron() {
  return (
    <main className="layout-grid">
      <div className="jumbotron">
        <div>
          <h1 className="intro">Hello, I'm Celestine!</h1>
          <p>Javascript developer. FOSS enthusiast</p>
          <div className="social-icons">
            <i className="fa fa-github"></i>
            <i className="fa fa-free-code-camp"></i>
            <i className="fa fa-stack-overflow"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <i className="fa fa-angle-double-down animated bounce infinite"></i>
      </div>
    </main>
  )
}

export default Jumbotron;