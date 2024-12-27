import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="โลโก้สาขา IT" className="navbar-logo-img" />
        <h2 className="navbar-title">สาขา IT</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About Us</Link></li>
        <li><Link to="/courses" className="navbar-link">Courses</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
