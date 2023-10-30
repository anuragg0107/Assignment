import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../Images/Logoblue.png"
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          <li><a href="/">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Events</a></li>
          <li><button className="more-button">More</button></li>
        </ul>
      </div>
      <div className="right-side">
        <button className="contact-button">Contact Us</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <i  className={isActive ? 'fa fa-times' : 'fa fa-bars'}></i>
      </button>
    </nav>
  );
}

export default Navbar;
