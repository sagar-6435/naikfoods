import React, { useState } from 'react';
import { Trash2, Minus, Plus, ChevronRight } from 'lucide-react';
import './Cart.css';

import prod1 from '../assets/images/image15.png';
import prod2 from '../assets/images/image16.png';
import prod3 from '../assets/images/image4.png';

const MOCK_CART = [
  {
    id: 1,
    name: 'Authentic Maharashtrian Mango Pickle',
    price: 249,
    quantity: 1,
    image: prod1,
    weight: '500g',
  },
  {
    id: 2,
    name: 'Spicy Garlic Chutney (Lasun Chutney)',
    price: 149,
    quantity: 2,
    image: prod2,
    weight: '250g',
  },
  {
    id: 3,
    name: 'Premium Goda Masala',
    price: 199,
    quantity: 1,
    image: prod3,
    weight: '250g',
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(MOCK_CART);

  const updateQuantity = (id, change) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 999 || subtotal === 0 ? 0 : 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-container">
        
        <div className="cart-header">
          <h1 className="cart-title">Your Cart</h1>
          <p className="cart-count">{cartItems.length} items</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <a href="/shop" className="continue-shopping-btn">Explore Products</a>
          </div>
        ) : (
          <div className="cart-layout">
            
            {/* Cart Items List */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-weight">{item.weight}</p>
                    <div className="item-price">₹{item.price}</div>
                  </div>

                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn"><Minus size={14} /></button>
                      <span className="qty-value">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn"><Plus size={14} /></button>
                    </div>
                    
                    <button onClick={() => removeItem(item.id)} className="remove-btn">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary-container">
              <div className="order-summary">
                <h2 className="summary-title">Order Summary</h2>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                
                <div className="summary-row">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? <span className="free-tag">Free</span> : `₹${deliveryFee}`}</span>
                </div>
                
                {subtotal < 999 && subtotal > 0 && (
                  <div className="delivery-notice">
                    Add ₹{999 - subtotal} more to get free delivery!
                  </div>
                )}
                
                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
                
                <button className="checkout-btn">
                  Proceed to Checkout <ChevronRight size={18} />
                </button>
                
                <p className="secure-checkout-notice">Secure Checkout - 100% Secure Payment</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
