import React from 'react';
import './About.css';
import profile from '../profile.png';

function About() {
  return (
    <section className="layout-grid">
      <div className="about">
        <div className="about-item image-wrap">
          <img src={profile} alt="Celestine Ekoh-Ordan" />
        </div>
        <div className="about-item profile">
          <div>
            <p>I’m a full stack web developer based in Lagos, Nigeria.</p>
            <p>My main area of expertise is with Javascript both on the front end building interfaces using UI frameworks like ReactJS and on the backend via NodeJS/Express.</p>
            <p>SASS/CSS, Gulp, Webpack, Figma, Adobe Illustrator are a few other tricks up my sleeve.</p>
            <p>I’m an avid reader of books, so you’ll likely find me reading one when I’m not clattering away at my keyboard. Otherwise  I’m playing a game of EA’s FIFA with friends.</p>
            <p>Want to know more?</p>
            <p>Feel free to <a href="#contact">Contact</a> me.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About;