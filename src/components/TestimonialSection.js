import React, { useState } from 'react';
import './TestimonialSection.css';
import leftArrow from '../assets/left-arrow.png'; // Adjusted path
import rightArrow from '../assets/right-arrow.png'; // Adjusted path
import backgroundArrow from '../assets/svg10.svg'; // SVG for the background arrow

// Import the images
import pro1 from '../assets/pro1.webp';
import pro2 from '../assets/pro2.webp';
import pro3 from '../assets/pro3.webp';
import pro4 from '../assets/pro4.webp';
import person1 from '../assets/person1.webp';
import person2 from '../assets/person2.webp';
import person3 from '../assets/person3.webp';
import person4 from '../assets/person4.webp';

const testimonials = [
    {
        text: "The bot helped us boost our revenue by using conversational marketing, abandoned cart conversions, and an easy to use broadcast feature.",
        name: "Vikas Kabra",
        title: "Entrepreneur in Residence, Neemans",
        image: person1,
        productImage: pro1
    },
    {
        text: "In the past two years, we've nearly tripled ourselves and are on the verge of profitability. LimeChat has been instrumental in this journey, accelerating our growth and optimizing marketing ROI. Thanks to Aniket and the LimeChat team for their invaluable support!",
        name: "Khalid Kamal Rumi",
        title: "CMO, The Indus Valley",
        image: person2,
        productImage: pro2
    },
    {
        text: "LimeChat's AI-powered GPT bots have significantly boosted efficiency. The bots handle most queries, allowing our agents to focus on crucial issues, leading to higher CSAT and NPS scores.",
        name: "Gaurav Jain",
        title: "VP, Customer Delight, Wow Skin Science",
        image: person3,
        productImage: pro3
    },
    {
        text: "LimeChat has been a fantastic partner to Kapiva, helping us grow everything from CRM and content to CS (Customer Support).",
        name: "Ameve Sharma",
        title: "Founder, Kapiva",
        image: person4,
        productImage: pro4
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="testimonial-section">
            <div className="testimonial-header">
                <h2>We work with 300+ market-<br/>leading brands</h2>
                <img src={backgroundArrow} alt="Background Arrow" className="background-arrow" />
            </div>
            <div className="testimonial-card">
                <div className="testimonial-text">
                    <p>{testimonials[currentIndex].text}</p>
                    <div className="stars">★★★★★</div>
                    <div className="testimonial-author">
                        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                        <div>
                            <h3>{testimonials[currentIndex].name}</h3>
                            <p>{testimonials[currentIndex].title}</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-product">
                    <img src={testimonials[currentIndex].productImage} alt="Product" />
                </div>
            </div>
            <div className="testimonial-navigation">
                <button className="testimonial_arrow" onClick={handlePrev}><img src={leftArrow} alt="Previous" /></button>
                <div className="pagination-dots">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
                <button className="testimonial_arrow" onClick={handleNext}><img src={rightArrow} alt="Next" className="rotate-arrow" /></button>
            </div>
        </div>
    );
};

export default TestimonialSection;
