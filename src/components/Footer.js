import React from 'react';
import './Footer.css';

function Footer() {
  var d = new Date();
  return (
    <footer className="layout-grid bg-dark-blue">
      <p className="footer">&copy; 2018{d.getFullYear() > 2018 ? ` - ${d.getFullYear()}` : ''}. Hand crafted by Celestine Ekoh-Ordan</p>
    </footer>
  )
}

export default Footer;