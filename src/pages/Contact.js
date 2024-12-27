import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>ติดต่อเรา</h1>
      <div className="contact-details">
        <p>เบอร์โทร: 053-XXX-XXX</p>
        <p>อีเมล: info@college.ac.th</p>
      </div>
      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=..." 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
