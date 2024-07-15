/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CaseStudySection.css'; // Import the CSS file
import caseImg1 from '../assets/case-img1.webp';
import caseImg2 from '../assets/case-img2.webp';
import caseImg3 from '../assets/case-img3.webp';
import lowerCaseLogo1 from '../assets/lower-case-logo1.webp';
import lowerCaseLogo2 from '../assets/lower-case-logo2.webp';
import lowerCaseLogo3 from '../assets/lower-case-logo3.webp';

const CaseStudySection = () => {
  const caseStudies = [
    {
      img: caseImg1,
      title: "The Indus Valley sees a 200% MoM increase in revenue with LimeChat automation",
      logo: lowerCaseLogo1,
    },
    {
      img: caseImg2,
      title: "Bella Vita Luxury Boosts Conversion Rates and RoAS with Ads that Click-to-WhatsApp",
      logo: lowerCaseLogo2,
    },
    {
      img: caseImg3,
      title: "Kapiva's Journey to Reducing RTO by 10% with LimeChat <> ClickPost Integration",
      logo: lowerCaseLogo3,
    },
  ];

  return (
    <div className="case-study-section">
      <h2>Customer stories to Inspire You</h2>
      <div className="case-studies">
        {caseStudies.map((caseStudy, index) => (
          <div className="case-study-card" key={index}>
            <div className="case-study-image-wrapper">
              <img src={caseStudy.img} alt={caseStudy.title} className="case-study-image" />
            </div>
            <p className="case-study-title">{caseStudy.title}</p>
            <div className="case-study-logo">
              <img src={caseStudy.logo} alt="Company Logo" className="company-logo" />
              <a href="#" className="learn-more-link">
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection;
