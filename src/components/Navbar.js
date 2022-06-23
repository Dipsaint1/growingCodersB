import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/Ventrae_Logo_PMS Copy.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="" />
          <span className="logo-text">VENTRAE</span>
        </div>

        <nav className="navbar">
          <li><Link to="/expertise" className="nav-links">OUR EXPERTISE</Link></li>
          <li><Link to="/about" className="nav-links">ABOUT US</Link></li>
          <li><Link to="/careers" className="nav-links">CAREERS</Link></li>
        </nav>
        <div className="contact-container">
          <Link to="/contact">CONTACT US</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar