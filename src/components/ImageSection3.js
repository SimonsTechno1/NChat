import React from 'react';
import img2 from './img3.png'; // Adjust the import based on your file structure
import './ImageSection3.css';

const ImageSection2 = () => {
  return (
    <div className="image-section">
      <img src={img2} alt="Section 2" className="image-section-img" />
      <div className="image-section-content">
        <h2>Capture WhatsApp <br/>Numbers with<br/>Interactive Popups</h2>
        <p>
        Missing first-party data on your website visitors? Capture phone numbers before they leave and engage them on WhatsApp. Seamlessly nurture leads into ready-to-buy customers.        </p>
      </div>
    </div>
  );
};

export default ImageSection2;
