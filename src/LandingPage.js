import React from 'react';
import './LandingPage.css';
import landingImage from './assets/landingpage.png'; // Import the landing page image
import BookDemoButton from './components/BookDemoButton'; // Import the reusable button component
import ImageSection1 from './components/ImageSection1'; // Import the new image section component
import ImageSection2 from './components/ImageSection2'; // Import the new image section component
import TestimonialSection from './components/TestimonialSection'; // Import the testimonial section component

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content-wrapper">
        <div className="landing-content">
          <h1>Stop losing your website visitors with 2-way WhatsApp Flows</h1>
          <p>
            Elevate conversion and slash acquisition costs by collecting WhatsApp
            numbers of visitors dropping off from your website. Retarget them on
            WhatsApp with 2-way flows.
          </p>
          <BookDemoButton /> {/* Use the reusable button component */}
        </div>
        <div className="landing-image">
          <img src={landingImage} alt="Landing Page" className="landing-image-cover" />
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <div className="client-logos-marquee_list-wrapper">
            <div role="list" className="client-logos-marquee_list">
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65f0c96e95781c21cec946ba_Yoga%20Bar.webp" loading="lazy" alt="Yoga Bar" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65f0c7abce40ec8657b1ab5d_WOW%20Skin Science.webp" loading="lazy" alt="WOW Skin Science" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd7165b0a96e75ffa9313b_the%20sleep%20company.png" loading="lazy" alt="Sleep Company" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd713795dfb4b797deecc1_Snitch.png" loading="lazy" alt="Snitch" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd71172bbc7d57ac31301c_True%20Classic.png" loading="lazy" alt="True Classic" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd70f6c4a02484242f05d8_Hindustan Unilever Limited.png" loading="lazy" alt="Hindustan Unilever Limited" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd70da0f0cf35e9929a7f9_neeman's.png" loading="lazy" alt="Neemans" className="client-logos-marquee_logo" />
              </div>
              {/* Duplicate the logos to create a seamless loop */}
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65f0c96e95781c21cec946ba_Yoga Bar.webp" loading="lazy" alt="Yoga Bar" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65f0c7abce40ec8657b1ab5d_WOW Skin Science.webp" loading="lazy" alt="WOW Skin Science" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd7165b0a96e75ffa9313b_the sleep company.png" loading="lazy" alt="Sleep Company" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd713795dfb4b797deecc1_Snitch.png" loading="lazy" alt="Snitch" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd71172bbc7d57ac31301c_True Classic.png" loading="lazy" alt="True Classic" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd70f6c4a02484242f05d8_Hindustan Unilever Limited.png" loading="lazy" alt="Hindustan Unilever Limited" className="client-logos-marquee_logo" />
              </div>
              <div role="listitem" className="client-logos-marquee_item">
                <img src="https://cdn.prod.website-files.com/65cd70909df4e526b27c7d0f/65cd70da0f0cf35e9929a7f9_neeman's.png" loading="lazy" alt="Neemans" className="client-logos-marquee_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add the new image sections below the marquee */}
      <ImageSection1 />
      <ImageSection2 />
      {/* Add the new TestimonialSection below the image sections */}
      <TestimonialSection />
    </div>
  );
};

export default LandingPage;
