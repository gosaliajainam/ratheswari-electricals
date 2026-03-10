import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Logic handled using only css or other way (keeping outer wrapper just in case)
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false); 
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container">
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="Ratheswari Electricals Pvt Ltd" className="nav-logo-img" />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>

          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>

          <Link to="/tenders" className={location.pathname === '/tenders' ? 'active' : ''}>Tenders</Link>

          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>

          <Link to="/contact" className={location.pathname === '/feedback' ? 'active' : ''}>Feedback</Link>
          <Link to="/contact" className={location.pathname === '/inquiry' ? 'active' : ''}>Inquiry</Link>
          <Link to="/contact" className={`nav-cta ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
