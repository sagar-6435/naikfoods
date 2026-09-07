import React, { useState } from 'react';
import { User, Calendar } from 'lucide-react';
import './Blogs.css';

// Import images for mock data
import blogImg1 from '../assets/images/image4.png';
import blogImg2 from '../assets/images/image5.png';
import blogImg3 from '../assets/images/image6.png';

// Import assets for features and newsletter sections
import image3 from '../assets/images/image3.png';
import freeDeliveryIcon from '../assets/images/Free Deliery.png';
import supportIcon from '../assets/images/24-7 support.png';
import securePayIcon from '../assets/images/Secure Pay.png';
import easyReturnsIcon from '../assets/images/Easy Returns.png';

const MOCK_CATEGORIES = ['All', 'Healthy Snack', 'Fasting', 'Premixes', 'Recipes', 'Pickles'];

const MOCK_BLOGS = [
  {
    id: 1,
    title: '10 Healthy & Crunchy Snack Products You Must Try',
    category: 'Healthy Snack',
    author: 'Priya Naik',
    date: '2026-03-03',
    image: blogImg1,
  },
  {
    id: 2,
    title: '10 Delicious Upwas Snacks You Must Try During Fasting',
    category: 'Fasting',
    author: 'Priya Naik',
    date: '2026-03-09',
    image: blogImg2,
  },
  {
    id: 3,
    title: '10 Traditional Thalipith Bhajni Premixes for Nutritious...',
    category: 'Premixes',
    author: 'Priya Naik',
    date: '2026-03-21',
    image: blogImg3,
  },
  {
    id: 4,
    title: 'Authentic Maharashtrian Mango Pickle Recipe at Home',
    category: 'Pickles',
    author: 'Priya Naik',
    date: '2026-04-10',
    image: blogImg1,
  },
  {
    id: 5,
    title: '5 Quick Diwali Sweets Recipes from Scratch',
    category: 'Recipes',
    author: 'Priya Naik',
    date: '2026-10-15',
    image: blogImg2,
  },
  {
    id: 6,
    title: 'Why Millet is the Ultimate Healthy Snack Choice',
    category: 'Healthy Snack',
    author: 'Priya Naik',
    date: '2026-11-05',
    image: blogImg3,
  }
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = activeCategory === 'All' 
    ? MOCK_BLOGS 
    : MOCK_BLOGS.filter(blog => blog.category === activeCategory);

  return (
    <div className="blogs-page">
      {/* Hero Banner */}
      <section className="blogs-hero">
        <h1 className="blogs-hero-title">Our Blogs</h1>
        <p className="blogs-hero-subtitle">Insights, traditional tips, and Maharashtrian culinary updates.</p>
      </section>

      {/* Main Content Area */}
      <div className="blogs-container">
        
        {/* Categories Filter */}
        <div className="blogs-categories">
          {MOCK_CATEGORIES.map(category => (
            <button 
              key={category}
              className={`blog-category-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid">
          {filteredBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-tag">{blog.category}</div>
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-footer">
                  <div className="blog-author">
                    <User size={14} className="blog-icon" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="blog-date">
                    <Calendar size={14} className="blog-icon" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusing existing sections for the bottom of the page */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Join the Naik Foods<br />Community</h2>
            <p className="newsletter-subtitle">Get authentic recipes and exclusive offers delivered to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email Address" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
          <div className="newsletter-image">
            <img src={image3} alt="Naik Foods Products" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={freeDeliveryIcon} alt="Free Delivery" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">Free Delivery</h4>
              <p className="feature-subtitle">Minimum order ₹999</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={supportIcon} alt="24/7 Support" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">24/7 Support</h4>
              <p className="feature-subtitle">Contact us 24 Hours</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={securePayIcon} alt="Secure Pay" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">Secure Pay</h4>
              <p className="feature-subtitle">100% Secure Payment</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={easyReturnsIcon} alt="Easy Returns" />
            </div>
            <div className="feature-info">
              <h4 className="feature-title">Easy Returns</h4>
              <p className="feature-subtitle">Within 30 Days</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Blogs;
