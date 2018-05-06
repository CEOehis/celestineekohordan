import React from 'react';
import './Jumbotron.css';

const
  scrollTo = function (to, duration) {
    const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
        const currentDate = +new Date();
        const currentTime = currentDate - startDate;
        element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
        else {
          element.scrollTop = to;
        }
      };
    animateScroll();
  };

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
            <i className="fa fa-github"></i>
            <i className="fa fa-free-code-camp"></i>
            <i className="fa fa-stack-overflow"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <i onClick={scrollDown} className="fa fa-angle-double-down animated bounce infinite"></i>
      </div>
    </main>
  )
}

export default Jumbotron;