import React from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import './Contact.css';

// Import assets for features section
import freeDeliveryIcon from '../assets/images/Free Deliery.png';
import supportIcon from '../assets/images/24-7 support.png';
import securePayIcon from '../assets/images/Secure Pay.png';
import easyReturnsIcon from '../assets/images/Easy Returns.png';

const Contact = () => {
  return (
    <div className="contact-page">
      
      {/* Get in Touch Section */}
      <section className="contact-section">
        <div className="contact-container">
          
          {/* Left Side: Contact Info */}
          <div className="contact-info-panel">
            <h2 className="contact-header">
              <span className="text-black">Reach Out to Our</span><br />
              <span className="text-primary">Naik Foods</span>
            </h2>
            <p className="contact-description">
              Whether you have a question about our spices or want to visit us in Pusad, we're here to help.
            </p>

            <div className="contact-details">
              {/* Emergency Call */}
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <PhoneCall size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h4>Emergency call</h4>
                  <p>+91 9730046247</p>
                  <span className="contact-sub">Mon-Sat: 9am - 8pm</span>
                </div>
              </div>

              {/* General Communication */}
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h4>General communication</h4>
                  <p>naikfoods001@gmail.com</p>
                  <span className="contact-sub">We reply within 24 hours</span>
                </div>
              </div>

              {/* Store Address */}
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} className="contact-icon" />
                </div>
                <div className="contact-text">
                  <h4>Store Address</h4>
                  <p>Seva Mitra mandal chauk, near Fadget polis chauki<br />Shukrawar Peth, Pune 411002</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <a href="#" className="social-link" style={{textDecoration: 'none', fontWeight: 'bold'}}>FB</a>
              <a href="#" className="social-link" style={{textDecoration: 'none', fontWeight: 'bold'}}>IG</a>
              <a href="#" className="social-link" style={{textDecoration: 'none', fontWeight: 'bold'}}>TW</a>
              <a href="#" className="social-link" style={{textDecoration: 'none', fontWeight: 'bold'}}>IN</a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <h3 className="form-title">Get in Touch</h3>
            <p className="form-subtitle">Have a question about our authentic regional flavors? We'd love to hear from you.</p>
            
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email here" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Naik Foods Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.565860361286!2d73.8543781!3d18.5033306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06ca7e7da29%3A0xcda6b7d2f9d51f7!2sSeva%20Mitra%20Mandal%20Chowk!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ backgroundColor: '#f9fafb' }}>
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

export default Contact;
