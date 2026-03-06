import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
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
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="container">
        <Link to="/" className="nav-logo">
          <img src={logoImg} alt="Ratheswari Electricals Pvt Ltd" className="nav-logo-img" />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>

          {/* Projects Dropdown */}
          <div className="nav-dropdown">
            <button className={`nav-dropdown-toggle ${location.pathname === '/projects' ? 'active' : ''}`} onClick={() => toggleDropdown('projects')}>
              Projects <span className="dropdown-arrow">&#9662;</span>
            </button>
            <div className={`nav-dropdown-menu ${openDropdown === 'projects' ? 'show' : ''}`}>
              <Link to="/projects">Residential</Link>
              <Link to="/projects">Corporate</Link>
              <Link to="/projects">Turnkey</Link>
            </div>
          </div>

          {/* Tenders Dropdown */}
          <div className="nav-dropdown">
            <button className={`nav-dropdown-toggle ${location.pathname === '/tenders' ? 'active' : ''}`} onClick={() => toggleDropdown('tenders')}>
              Tenders <span className="dropdown-arrow">&#9662;</span>
            </button>
            <div className={`nav-dropdown-menu ${openDropdown === 'tenders' ? 'show' : ''}`}>
              <Link to="/tenders">Government</Link>
              <Link to="/tenders">Private</Link>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button className={`nav-dropdown-toggle ${location.pathname === '/services' ? 'active' : ''}`} onClick={() => toggleDropdown('services')}>
              Services <span className="dropdown-arrow">&#9662;</span>
            </button>
            <div className={`nav-dropdown-menu ${openDropdown === 'services' ? 'show' : ''}`}>
              <Link to="/services">Electrical</Link>
              <Link to="/services">CCTV</Link>
              <Link to="/services">Security</Link>
              <Link to="/services">Biomatrix</Link>
              <Link to="/services">Home Automation</Link>
              <Link to="/services">Audio & Visual System</Link>
              <Link to="/services">Society Beautification</Link>
              <Link to="/services">Lift Maintenance</Link>
              <Link to="/services">Plumbing</Link>
              <Link to="/services">Design</Link>
            </div>
          </div>

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
