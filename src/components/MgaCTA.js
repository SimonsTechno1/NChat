import React from 'react';
import './MgaCTA.css';
import lastPhoto from '../assets/last-photo.webp';
import BookDemoButton from '../components/BookDemoButton';

const MgaCTA = () => {
  return (
    <div className="mga-cta">
      <div className="mga-cta-content">
        <h2>Ready to drive conversions with WhatsApp?</h2>
        <BookDemoButton />
      </div>
      <div className="mga-cta-image">
        <img src={lastPhoto} alt="Happy people using a laptop" />
      </div>
    </div>
  );
};

export default MgaCTA;
