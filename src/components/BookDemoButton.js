// src/components/BookDemoButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BookDemoButton.css';
import arrowIcon from '../assets/svgexport-1.svg'; // Import the arrow SVG

const BookDemoButton = () => {
  return (
    <Link to="/book-a-demo" className="book-demo-button">
      Book A Demo <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
    </Link>
  );
};

export default BookDemoButton;
