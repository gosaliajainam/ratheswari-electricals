import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import logoImg from '../assets/rateshwari-logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <img
              src={logoImg}
              alt="Ratheswari Electricals Pvt Ltd"
              className="footer-logo"
            />
            <p className="footer-tagline">Skill &bull; Organization &bull; Service &bull; Trust</p>
            <p>
              A trusted service provider delivering professional electrical and facility
              maintenance solutions for Residential, Commercial, Corporate, and Government sectors.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/tenders">Tenders</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Electrical Services</Link></li>
              <li><Link to="/services">CCTV Installation</Link></li>
              <li><Link to="/services">Home Automation</Link></li>
              <li><Link to="/services">Solar Solutions</Link></li>
              <li><Link to="/services">AC Services</Link></li>
              <li><Link to="/services">Lift Maintenance</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <FaPhone className="icon" />
              <span>8866877336</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="icon" />
              <span>ratheswarielectricals@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <FaClock className="icon" />
              <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
            </div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>F10, Sonalika Park, near Dharti Cross Road, chandlodiya, Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ratheswari Electricals Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
