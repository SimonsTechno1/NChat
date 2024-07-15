import React from 'react';
import img2 from './img1.png'; // Adjust the import based on your file structure
import './ImageSection1.css';

const ImageSection2 = () => {
  return (
    <div className="image-section">
      <img src={img2} alt="Section 2" className="image-section-img" />
      <div className="image-section-content">
        <h2>Retarget Customers on WhatsApp wherever they drop off</h2>
        <p>
          Spending crazy amounts of money to retarget website dropoffs? Capture first-party data and retarget users efficiently on WhatsApp. Leave it to us to effortlessly gather their phone numbers, from PDP to cart to checkout.
        </p>
      </div>
    </div>
  );
};

export default ImageSection2;

