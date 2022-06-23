import React from 'react';
import "./Footer.css";
import image from "../images/Ventrae_Logo_PMS Copy.png";
import { Link } from 'react-router-dom';
// import FooterContent from "./utils/FooterContent";

function Footer() {
  const year = new Date().getFullYear();

  return (
      <footer>
        <div className="footer-container">
          <div className="footer-image">
            <img src={image} alt="" />
          </div>
          <div className="footer-content-container">
            <div className="footer-content">
              <h5 className='footer-content-header'>COMPANY</h5>
              <div className="footer-content-items">
                <Link to="/" className='footer-links'>About Us</Link>
                <Link to="/" className='footer-links'>Careers</Link>
              </div>
            </div>
            <div className="footer-content">
              <h5 className='footer-content-header'>EXPERTISE</h5>
              <div className="footer-content-items">
                <Link to="/" className='footer-links'>Capital Raising</Link>
                <Link to="/" className='footer-links'>Growth Capital</Link>
                <Link to="/" className='footer-links'>Business Support Capital</Link>
              </div>
            </div>
            <div className="footer-content">
              <h5 className='footer-content-header'>ADDRESS</h5>
              <div className="footer-content-items">
                <Link to="/" className='footer-links'>10 Kuramo Close</Link>
                <Link to="/" className='footer-links'>Ikoyi, Lagos 101233</Link>
                <Link to="/" className='footer-links'>Nigeria</Link>
              </div>
            </div>
            <div className="footer-content">
              <h5 className='footer-content-header'>GET IN TOUCH</h5>
              <div className="footer-content-items">
                <Link to="/" className='footer-links'>Info@ventrae.com</Link>
                <Link to="/" className='footer-links'>+234 (0) 1342 3800</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-container">
          <span className='copyright'>&copy; Copyright {year} Ventrae Ltd</span>
          <div className="policy-container">
            <Link to="/" className='privacy-policy policy'>Privacy Policy</Link>
            <Link to="/" className='cookie-policy policy'>Cookie Policy</Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer;