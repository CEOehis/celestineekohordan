import React from 'react';
import './Portfolio.css';
import moment from '../moment.png';
import reactiveWeather from '../reactive-weather.png';

function Portfolio() {
  return (
    <section className="layout-grid bg-grey" id="portfolio">
      <div className="portfolio">
        <h1 className="portfolio-heading">Portfolio</h1>
        <div className="portfolio-section">
          <div className="portfolio-item">
            <div className="card">
              <div className="card-img" style={{ backgroundImage: `url(${moment})` }}></div>
              <div className="project">
                <h2>Moment</h2>
                <p>A timer/productivity web application. Features a one-item only todo manager.</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <div className="card">
              <div className="card-img" style={{backgroundImage: `url(${reactiveWeather})`}}></div>
              <div className="project">
                <h2>Reactive Weather</h2>
                <p>A simple utility for forecasting the weeks' weather. Including hour-by-hour forecast of each days weather.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;