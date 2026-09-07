import React from 'react';
import { Link } from 'react-router-dom';
import { User, Heart, ShoppingCart } from 'lucide-react';
import './Navbar.css';
import brandLogo from '../assets/brand.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-brand">
          <Link to="/">
            <img src={brandLogo} alt="Naik Foods Logo" className="brand-logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/shop" className="nav-link">Shop</Link></li>
          <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Action Icons */}
        <div className="navbar-actions">
          <Link to="/account" className="icon-btn" aria-label="Profile">
            <User size={24} color="#000" />
          </Link>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <Heart size={24} color="#000" />
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <ShoppingCart size={24} color="#000" />
            <span className="cart-badge">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
