import React from 'react';
import './Footer.css';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import fl1 from '../assets/fl1.png';
import fl2 from '../assets/fl2.webp';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.png';
import linkedin from '../assets/link.svg';
import instagram from '../assets/insta.svg';
import twitter from '../assets/x.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section footer-about">
          <h2 className="footer-title">LimeChat</h2>
          <p>Boost support and customer satisfaction with AI-powered WhatsApp journeys. Perfect for rapidly growing e-commerce brands.</p>
          <div className="footer-certifications">
            <img src={f1} alt="High Performer 1" />
            <img src={f2} alt="High Performer 2" />
            <img src={f3} alt="High Performer 3" />
            <img src={f4} alt="High Performer 4" />
          </div>
          <div className="footer-certifications">
            <img src={fl1} alt="Certification 1" />
            <img src={fl2} alt="Certification 2" />
          </div>
        </div>
        <div className="footer-section footer-links">
          <h3 className="footer-subtitle">Products</h3>
          <ul>
            <li><a href="/support">Support</a></li>
            <li><a href="/marketing">Marketing</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <h3 className="footer-subtitle">Marketing</h3>
          <ul>
            <li><a href="/conversion-flows">Conversion Flows</a></li>
            <li><a href="/campaigns">Campaigns and Broadcasts</a></li>
            <li><a href="/customer-segments">Customer Segments</a></li>
            <li><a href="/whatsapp-commerce-bot">WhatsApp Commerce Bot</a></li>
            <li><a href="/rto-reduction-flows">RTO Reduction Flows</a></li>
            <li><a href="/post-purchase-flows">Post-Purchase Flows</a></li>
            <li><a href="/click-to-whatsapp-ads">Click-to-WhatsApp Ads</a></li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <h3 className="footer-subtitle">Support</h3>
          <ul>
            <li><a href="/support-chatbot">Support Chatbot</a></li>
            <li><a href="/omnichannel-crm">OmniChannel CRM</a></li>
            <li><a href="/level-3-ai">Level-3 AI</a></li>
            <li><a href="/intelligent-csat">Intelligent CSAT</a></li>
            <li><a href="/ai-copilot">AI Copilot</a></li>
            <li><a href="/support-analytics">Support Analytics</a></li>
            <li><a href="/retail-channel-partner-support">Retail Channel Partner Support</a></li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <h3 className="footer-subtitle">Resources</h3>
          <ul>
            <li><a href="/compare">Compare</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/guides">Guides</a></li>
            <li><a href="/webinars">Webinars</a></li>
            <li><a href="/integrations">Integrations</a></li>
          </ul>
        </div>
        <div className="footer-section footer-links">
          <h3 className="footer-subtitle">Company</h3>
          <ul>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/partnership">Partnership</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section footer-socials">
          <h3 className="footer-subtitle">Socials</h3>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
            <a href="https://www.twitter.com"><img src={twitter} alt="Twitter" /></a>
          </div>
        </div>
        <div className="footer-section footer-partners">
          <h3 className="footer-subtitle">Partners</h3>
          <div className="footer-partners-logos">
            <img src={p1} alt="Meta" />
            <img src={p2} alt="Microsoft" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="/data-policy">Data Policy</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/service-level-agreement">Service Level Agreement</a>
        <p>© 2024, Wavicle Technologies Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
