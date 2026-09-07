import React from 'react';
import './Footer.css';
import brandLogo from '../assets/brand.png'; // Make sure to replace with the dark version if you have one

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand-section">
          <img src={brandLogo} alt="Naik Foods Logo" className="footer-logo" />
          <p className="footer-description">
            Authentic Maharashtrian Delicacies & Masalas. Experience the rich taste of tradition with every bite.
          </p>
        </div>

        {/* Shop Links */}
        <div className="footer-links-section">
          <h3 className="footer-heading">Shop</h3>
          <ul className="footer-links">
            <li><a href="/categories/snacks-and-namkeen">Snacks and Namkeen</a></li>
            <li><a href="/categories/pickles-and-condiments">Pickles & Condiments</a></li>
            <li><a href="/categories/sweets-and-bakery">Sweets & Bakery</a></li>
            <li><a href="/categories/dairy-and-beverages">Dairy & Beverages</a></li>
            <li><a href="/categories/mukhvas-and-digestives">Mukhvas & Digestives</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact-section">
          <h3 className="footer-heading">Visit Our Store</h3>
          <a 
            href="https://www.google.com/maps/place/NAIK+FOODS/@18.5085455,73.8572996,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1d2a1bab18f:0x612261ab2b10c199!8m2!3d18.5085455!4d73.8572996!16s%2Fg%2F11yk9025kq?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-address"
          >
            Seva Mitra Mandal Chowk<br/>
            Near Fadgate Police Chowki<br/>
            Shukrawar Peth, Pune 411002
          </a>
          <p className="footer-phone">+91 9730046247</p>
          <p className="footer-hours">9 AM - 10 PM Daily</p>
          <a 
            href="https://www.google.com/maps/place/NAIK+FOODS/@18.5085455,73.8572996,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c1d2a1bab18f:0x612261ab2b10c199!8m2!3d18.5085455!4d73.8572996!16s%2Fg%2F11yk9025kq?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary footer-btn"
          >
            Get Directions
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Naik Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
