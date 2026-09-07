import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import './Wishlist.css';

import prod1 from '../assets/images/image15.png';
import prod2 from '../assets/images/image16.png';
import prod3 from '../assets/images/image4.png';
import prod4 from '../assets/images/image5.png';

const MOCK_WISHLIST = [
  {
    id: 1,
    name: 'Authentic Maharashtrian Mango Pickle',
    price: 249,
    image: prod1,
    weight: '500g',
    inStock: true,
  },
  {
    id: 2,
    name: 'Spicy Garlic Chutney (Lasun Chutney)',
    price: 149,
    image: prod2,
    weight: '250g',
    inStock: true,
  },
  {
    id: 3,
    name: 'Premium Goda Masala',
    price: 199,
    image: prod3,
    weight: '250g',
    inStock: false,
  },
  {
    id: 4,
    name: 'Crunchy Chakli',
    price: 120,
    image: prod4,
    weight: '200g',
    inStock: true,
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(MOCK_WISHLIST);

  const removeItem = (id) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-count">{wishlistItems.length} items saved</p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <Heart size={48} className="empty-heart-icon" />
            <h2>Your wishlist is empty</h2>
            <p>Save items you love here to buy them later.</p>
            <a href="/shop" className="continue-shopping-btn">Explore Products</a>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                <div className="wishlist-image-container">
                  <img src={item.image} alt={item.name} />
                  <button onClick={() => removeItem(item.id)} className="remove-wishlist-btn">
                    <Heart size={20} fill="#ef4444" color="#ef4444" />
                  </button>
                  {!item.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
                </div>
                
                <div className="wishlist-info">
                  <h3 className="wishlist-name">{item.name}</h3>
                  <div className="wishlist-meta">{item.weight}</div>
                  <div className="wishlist-price">₹{item.price}</div>
                  
                  <button 
                    className={`move-to-cart-btn ${!item.inStock ? 'disabled' : ''}`}
                    disabled={!item.inStock}
                  >
                    <ShoppingCart size={16} />
                    {item.inStock ? 'Move to Cart' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
