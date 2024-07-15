// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/NChat-logo.webp'; // Import the logo image
import dropdownIcon from './assets/svgexport-3.svg'; // Import the dropdown SVG
import BookDemoButton from './components/BookDemoButton'; // Import the reusable button component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="LimeChat Logo" />
        </Link>
      </div>
      <div className="navbar-links">
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
        <BookDemoButton /> {/* Use the reusable button component */}
      </div>
    </nav>
  );
};

export default Navbar;
