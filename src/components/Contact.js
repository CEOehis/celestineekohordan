import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="layout-grid bg-blue">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>I'm available for remote work or freelance projects</p>
        <p>Feel free to ping me</p>
        <a href="mailto:celestine_eo@outlook.com"><i className="fa fa-envelope"></i> celestine_eo@outlook.com</a>
      </div>
    </section>
  )
}

export default Contact;