/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SolutionSection.css'; // Import the CSS file
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import logo4 from '../assets/logo4.svg';
import logo5 from '../assets/logo5.svg';
import logo6 from '../assets/logo6.svg';

const SolutionSection = () => {
  const features = [
    {
      logo: logo1,
      title: 'Campaigns and Broadcasts',
      description: 'Enhance retention with engaging, non-spammy 2-way WhatsApp campaigns',
    },
    {
      logo: logo2,
      title: 'Customer Segments',
      description: 'Achieve precise targeting and instant engagement for top brands.',
    },
    {
      logo: logo3,
      title: 'WhatsApp Commerce Bot',
      description: 'Unlock extra revenue with a seamless WhatsApp buying journey',
    },
    {
      logo: logo4,
      title: 'RTO Reduction Flows',
      description: 'Manage Return-to-Origin effectively through WhatsApp',
    },
    {
      logo: logo5,
      title: 'Post-Purchase Flows',
      description: 'Transform your post-purchase journey with proactive updates',
    },
    {
      logo: logo6,
      title: 'Click-to-WhatsApp Ads',
      description: 'Save on acquisition costs by tapping into WhatsApp ads',
    },
  ];

  return (
    <div className="solution-section">
      <h2>Also in Our Marketing Suite</h2>
      <div className="solution-details">
        {features.map((feature, index) => (
          <div className="solution-feature" key={index}>
            <div className="icon-circle">
              <img src={feature.logo} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="learn-more">Learn More <span></span></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;


