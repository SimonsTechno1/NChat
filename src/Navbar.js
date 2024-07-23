import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/NChat-logo.webp';
import dropdownIcon from './assets/svgexport-3.svg';
import BookDemoButton from './components/BookDemoButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="LimeChat Logo" />
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-item">
          <Link to="/products">Products</Link>
          <img src={dropdownIcon} alt="Dropdown" />
        </div>
        <div className="navbar-item">
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="navbar-item">
          <Link to="/compare">Compare</Link>
        </div>
        <div className="navbar-item">
          <Link to="/resources">Resources</Link>
          <img src={dropdownIcon} alt="Dropdown" />
        </div>
        <div className="navbar-item">
          <Link to="/about-us">About Us</Link>
          <img src={dropdownIcon} alt="Dropdown" />
        </div>
      </div>
      <div className="navbar-demo">
        <BookDemoButton />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={dropdownIcon} alt="Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
