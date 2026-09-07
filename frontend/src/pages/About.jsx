import React from 'react';
import './About.css';
import legacyImg from '../assets/images/founder.png';
import aajiImg from '../assets/images/bhama.png';
import storeFrontImg from '../assets/images/store-front.jpg';
import freeDeliveryIcon from '../assets/images/Free Deliery.png';
import supportIcon from '../assets/images/24-7 support.png';
import securePayIcon from '../assets/images/Secure Pay.png';
import easyReturnsIcon from '../assets/images/Easy Returns.png';
import { ArrowRight, CheckCircle2, Utensils, Truck, Users, Globe, Lightbulb, Leaf, CookingPot, UtensilsCrossed, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="badge dark-badge" style={{ margin: '0 auto 20px', display: 'flex', width: 'max-content' }}>
            <span className="badge-icon">🌿</span> ABOUT NAIK FOODS
          </div>
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Insights, tips, and updates to help you shop smarter and live better
          </p>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="about-section bg-white">
        <div className="container legacy-container">
          <div className="legacy-content">
            <h4 className="section-eyebrow">OUR LEGACY</h4>
            <h2 className="section-title">From Seeds to<br /><span className="text-primary">Sustenance</span></h2>
            
            <p className="about-text text-gray">
              Rooted in a legacy that began in 1938 with <span className="text-black">Late Shri Anant Balkrishna Naik</span>, the Naik family has spent over eight decades building trust across agriculture, hospitality, and lifestyle sectors. From the foundation of <span className="text-black">Naik Seeds</span> to ventures like <span className="text-black">Sushil Lodging</span>, <span className="text-black">Sushil Dining Hall</span>, and <span className="text-black">Naik Landscape Services</span>, the journey has always been driven by quality, service, and innovation.
            </p>
            <p className="about-text text-gray">
              Continuing this legacy, <span className="text-black">Naik Foods</span>, founded in 2025 by <span className="text-black">Mrs. Priya Chandan Naik</span>, brings together wholesome and high-quality food products under one trusted name — carrying forward generations of dedication, purity, and excellence.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">1938</div>
                <h5 className="stat-title">Legacy Began</h5>
                <p className="stat-desc">Founded with Naik Seeds.</p>
              </div>
              <div className="stat-card">
                <div className="stat-value">75+</div>
                <h5 className="stat-title">Years of Trust</h5>
                <p className="stat-desc">Serving generations.</p>
              </div>
              <div className="stat-card">
                <div className="stat-value">04</div>
                <h5 className="stat-title">Family Ventures</h5>
                <p className="stat-desc">Agriculture to hospitality.</p>
              </div>
              <div className="stat-card">
                <div className="stat-value">2025</div>
                <h5 className="stat-title">Naik Foods</h5>
                <p className="stat-desc">A new chapter begins.</p>
              </div>
            </div>
          </div>
          
          <div className="legacy-image-wrapper">
            <img src={legacyImg} alt="Our Legacy" className="legacy-image" />
            <div className="floating-badge">
              <span className="badge-year">Since 1938</span>
              <span className="badge-text">Generations of trust</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-section bg-gray">
        <div className="container text-center">
          <h2 className="section-title text-center">Our <span className="text-primary">Values</span></h2>
          <p className="section-subtitle text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
            At Naik Foods, we're passionate about preserving Maharashtra's culinary legacy with authenticity and care.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Utensils className="value-icon-svg" />
              </div>
              <h4 className="value-title">Authenticity</h4>
              <p className="value-desc">Every dish is crafted with heirloom recipes to ensure a true Maharashtrian soul in every bite.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Truck className="value-icon-svg" />
              </div>
              <h4 className="value-title">Reliability</h4>
              <p className="value-desc">From careful preparation to timely delivery, we maintain the highest standards of hygiene and trust.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Users className="value-icon-svg" />
              </div>
              <h4 className="value-title">Community</h4>
              <p className="value-desc">We empower local farmers and home chefs, building a sustainable network that supports Maharashtra's roots.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Globe className="value-icon-svg" />
              </div>
              <h4 className="value-title">Regional Pride</h4>
              <p className="value-desc">Bringing you the diverse culinary landscape of Maharashtra, from the Konkan coast to the heart of Vidarbha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="about-section bg-white">
        <div className="container work-container">
          <div className="work-content">
            <h4 className="section-eyebrow">HOW WE WORK</h4>
            <h2 className="section-title">From Farm to<br /><span className="text-primary">Your Kitchen</span></h2>
            <p className="about-text" style={{ fontSize: '18px' }}>
              Our process is a labor of love, ensuring that the soul of Maharashtrian cuisine remains untampered and authentic.
            </p>
            <div style={{ marginTop: '40px', position: 'relative' }}>
              <img src={storeFrontImg} alt="Naik Foods Store" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover' }} />
              <button className="learn-more-btn">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="work-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <Lightbulb className="timeline-icon-svg" />
              </div>
              <h4 className="timeline-title">Sourcing Regional Recipes</h4>
              <p className="timeline-desc">Collaborating with local artisans from Konkan to Vidarbha.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <Leaf className="timeline-icon-svg" />
              </div>
              <h4 className="timeline-title">Ingredient Selection</h4>
              <p className="timeline-desc">Only the finest local ingredients for peak freshness.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <CookingPot className="timeline-icon-svg" />
              </div>
              <h4 className="timeline-title">Preparation with Care</h4>
              <p className="timeline-desc">Traditional methods with modern hygiene standards.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <UtensilsCrossed className="timeline-icon-svg" />
              </div>
              <h4 className="timeline-title">Curation & Delivery</h4>
              <p className="timeline-desc">Freshly packed in Pune for your doorstep delivery.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <ShieldCheck className="timeline-icon-svg" />
              </div>
              <h4 className="timeline-title">Quality Assurance</h4>
              <p className="timeline-desc">Strict checks for taste, hygiene, and packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspiration Section */}
      <section className="about-section bg-light-green">
        <div className="container inspiration-container">
          <div className="inspiration-content">
            <h2 className="section-title">Our Inspiration,<br /><span className="text-primary">Our AAJI</span></h2>
            
            <p className="about-text text-gray">
              The story of <span className="text-black">Naik Foods</span> is deeply rooted in the legacy of the Naik family, which has been connected to agriculture in Pune for over 70 years—a foundation built on authenticity, quality, and respect for tradition.
            </p>
            <p className="about-text text-gray">
              In the late 1980s, <span className="text-black">Late Sarita Naik</span> (our beloved Aaji) took this legacy a step further by starting Pune's first cake manufacturing classes, long before baking became mainstream. Her kitchen was more than a place to cook—it was a space where tradition met innovation, where every recipe was crafted with precision and love.
            </p>
            <p className="about-text text-gray">
              In 1992, the family expanded its journey in hospitality with the establishment of <a href="https://hotelsushil.com/" className="text-black" target="_blank" rel="noopener noreferrer">Hotel Sushil</a>, further strengthening our connection with serving people and creating comforting experiences.
            </p>
            <p className="about-text text-gray">
              Aaji was the heart of it all—an innovator who perfected authentic Maharashtrian recipes and handcrafted masalas. Her techniques carried the essence of home, perfected through years of intuition and care. Today, <span className="text-black">Naik Foods</span> is a tribute to her legacy—sharing food that doesn't just taste good, but feels like home.
            </p>
          </div>
          
          <div className="inspiration-image-wrapper">
            <img src={aajiImg} alt="Our Aaji" className="inspiration-image" />
          </div>
        </div>
      </section>

      {/* Features Section */}
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

export default About;
