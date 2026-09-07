import React, { useState, useEffect, useRef } from 'react';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const reelData = [
  { id: 1, url: 'https://www.instagram.com/reel/DNsq4jgWHh4/', image: image3 },
  { id: 2, url: 'https://www.instagram.com/reel/DPBOH3CjAst/', image: image4 },
  { id: 3, url: 'https://www.instagram.com/reel/DPWMDasDDM0/', image: image5 },
  { id: 4, url: 'https://www.instagram.com/reel/DXPLYmnDFVR/', image: image6 },
];

import image21 from '../assets/images/image21.png';
import freeDeliveryIcon from '../assets/images/Free Deliery.png';
import supportIcon from '../assets/images/24-7 support.png';
import securePayIcon from '../assets/images/Secure Pay.png';
import easyReturnsIcon from '../assets/images/Easy Returns.png';
import './Index.css';

// Import hero assets
import hero1 from '../assets/images/hero-banner/hero1.png'; 
import hero2 from '../assets/images/hero-banner/hero2.png'; 
import hero3 from '../assets/images/hero-banner/hero3.png'; 

// Import category assets
import snacksImg from '../assets/images/Featured Categories/Snacks and Namkeen.png';
import picklesImg from '../assets/images/Featured Categories/Pickles and Condiments.png';
import sweetsImg from '../assets/images/Featured Categories/Sweets & Bakery.png';
import dairyImg from '../assets/images/Featured Categories/Dairy & Bevarages.png';
import mukhvasImg from '../assets/images/Featured Categories/Mukhvas & Digestives.png';
import spicesImg from '../assets/images/Featured Categories/Spices & Masalas.png';

// Import best sellers
import product1 from '../assets/images/best-sellers/Methi Thalipith Bhajni.jpg';
import product2 from '../assets/images/best-sellers/Prawns Pickle.jpg';
import product3 from '../assets/images/best-sellers/Tomato Rings.jpg';

// Import region products
import puneImg1 from '../assets/images/Shop by Region/Shrushbury Cookies.jpg';
import puneImg2 from '../assets/images/Shop by Region/Cream Roll.jpg';
import puneImg3 from '../assets/images/Shop by Region/Bake-lite Chirote.jpg';
import puneImg4 from '../assets/images/Shop by Region/Twist Khari.jpg';

import vidarbhaImg1 from '../assets/images/Shop by Region/Hudra Thalipith Bhajni.jpg';
import vidarbhaImg2 from '../assets/images/Shop by Region/Jowar Chivda.jpg';

import konkanImg1 from '../assets/images/Shop by Region/Banana Wefers.jpg';
import konkanImg2 from '../assets/images/Shop by Region/Karle Chips.png';

import nashikImg1 from '../assets/images/Shop by Region/Beetroot Chips.jpg';
import nashikImg2 from '../assets/images/Shop by Region/Broccoli Chips.jpg';
import nashikImg3 from '../assets/images/Shop by Region/Potato Chips.jpg';
import nashikImg4 from '../assets/images/Shop by Region/Cheeseling.jpg';

const popularProducts = [
  {
    id: 1,
    name: "Methi Thalipith Bhajni",
    price: "₹150",
    image: product1,
    weight: "250g"
  },
  {
    id: 2,
    name: "Prawns Pickle",
    price: "₹350",
    image: product2,
    weight: "200g"
  },
  {
    id: 3,
    name: "Tomato Rings",
    price: "₹120",
    image: product3,
    weight: "150g"
  }
];

const regionProducts = {
  Pune: [
    { id: 101, name: "Shrushbury Cookies", price: "₹200", image: puneImg1, weight: "250g", desc: "Authentic Pune Bakery Style" },
    { id: 102, name: "Cream Roll", price: "₹120", image: puneImg2, weight: "200g", desc: "Classic Cream Filled Rolls" },
    { id: 103, name: "Bake-lite Chirote", price: "₹180", image: puneImg3, weight: "200g", desc: "Traditional Flaky Sweet" },
    { id: 104, name: "Twist Khari", price: "₹150", image: puneImg4, weight: "250g", desc: "Crispy Tea-time Snack" }
  ],
  Vidarbha: [
    { id: 105, name: "Hudra Thalipith Bhajni", price: "₹160", image: vidarbhaImg1, weight: "500g", desc: "Nutritious Multigrain Flour" },
    { id: 106, name: "Jowar Chivda", price: "₹140", image: vidarbhaImg2, weight: "250g", desc: "Healthy Roasted Snack" }
  ],
  Konkan: [
    { id: 107, name: "Banana Wafers", price: "₹130", image: konkanImg1, weight: "200g", desc: "Crispy Fried Banana Chips" },
    { id: 108, name: "Karle Chips", price: "₹150", image: konkanImg2, weight: "150g", desc: "Bitter Gourd Chips" }
  ],
  Nashik: [
    { id: 109, name: "Beetroot Chips", price: "₹160", image: nashikImg1, weight: "150g", desc: "Healthy Baked Chips" },
    { id: 110, name: "Broccoli Chips", price: "₹180", image: nashikImg2, weight: "150g", desc: "Nutritious Veggie Snack" },
    { id: 111, name: "Potato Chips", price: "₹100", image: nashikImg3, weight: "200g", desc: "Classic Salted Chips" },
    { id: 112, name: "Cheeseling", price: "₹140", image: nashikImg4, weight: "200g", desc: "Cheesy Bite-sized Snack" }
  ]
};

const slides = [
  {
    id: 1,
    title: "The Heart of Authentic Maharashtra",
    subtitle: "From hand-pounded masalas to farm-fresh staples, bring the traditional flavors of Vidarbha to your kitchen.",
    image: hero1,
    imagePosition: 'right',
    button: {
        text: "shop the collection",
        href: "/shop"
    }
  },
  {
    id: 2,
    title: "Visit Our Authentic Food Store",
    subtitle: "Experience the tradition in person. Visit our flagship store in Pune for the freshest batches and local specialties.",
    image: hero2,
    imagePosition: 'left',
    button: {
        text: "Locatie our shop",
        href: "/about"
    }
  },
  {
    id: 3,
    title: "Aaji's Recipe: Traditional Pickles",
    subtitle: "Sun-dried, oil-preserved, and made with 100% natural ingredients. No preservatives, just pure nostalgia.",
    image: hero3,
    imagePosition: 'right',
    button: {
        text: "Eplore Pickles",
        href: "/shop"
    }
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeRegion, setActiveRegion] = useState('Vidarbha');
  const categoriesRef = useRef(null);
  const categoriesRef2 = useRef(null);
  const categoriesRef3 = useRef(null);
  const shopByRegionRef = useRef(null);
  const productsRef = useRef(null);
  const bestSellersRef = useRef(null);

  const regions = ['Pune', 'Vidarbha', 'Konkan', 'Nashik'];

  const scrollSection = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 310; // width of card + gap
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Arrow */}
          <button className="slider-arrow left" onClick={prevSlide}>
            <ChevronLeft size={24} color="#ffffff" />
          </button>

          <div className="carousel-wrapper">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${slide.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
              >
                <div className="slide-content-area">
                  <div className="badge dark-badge">
                    <span className="badge-icon">⚡</span> NAIK FOODS ORIGINAL
                  </div>
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-description">{slide.subtitle}</p>
                  
                  {slide.button && (
                    <a href={slide.button.href} className="card-btn solid-btn">
                      {slide.button.text} <ArrowRight size={18} />
                    </a>
                  )}
                </div>
                
                <div className="slide-image-area">
                  <img src={slide.image} alt={slide.title} className="slide-floating-image" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="slider-arrow right" onClick={nextSlide}>
            <ChevronRight size={24} color="#ffffff" />
          </button>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Categories</h2>
            <p className="section-subtitle" style={{ marginBottom: '0px' }}>Explore our curated selection of regional Maharashtrian delights.</p>
          </div>
        </div>

        <div className="categories-slider-wrapper">
          <button className="category-arrow left" onClick={() => scrollSection(categoriesRef, 'left')}>
            <ChevronLeft size={20} color="#161915" />
          </button>
          
          <div className="categories-slider-container" ref={categoriesRef}>
            <a href="/categories/snacks-and-namkeen" className="category-card">
            <div className="category-image-wrapper">
              <img src={snacksImg} alt="Snacks and Namkeen" />
            </div>
            <h3 className="category-name">Snacks and Namkeen</h3>
          </a>
          <a href="/categories/pickles-and-condiments" className="category-card">
            <div className="category-image-wrapper">
              <img src={picklesImg} alt="Pickles and Condiments" />
            </div>
            <h3 className="category-name">Pickles & Condiments</h3>
          </a>
          <a href="/categories/sweets-and-bakery" className="category-card">
            <div className="category-image-wrapper">
              <img src={sweetsImg} alt="Sweets & Bakery" />
            </div>
            <h3 className="category-name">Sweets & Bakery</h3>
          </a>
          <a href="/categories/dairy-and-beverages" className="category-card">
            <div className="category-image-wrapper">
              <img src={dairyImg} alt="Dairy & Beverages" />
            </div>
            <h3 className="category-name">Dairy & Beverages</h3>
          </a>
          <a href="/categories/mukhvas-and-digestives" className="category-card">
            <div className="category-image-wrapper">
              <img src={mukhvasImg} alt="Mukhvas & Digestives" />
            </div>
            <h3 className="category-name">Mukhvas & Digestives</h3>
          </a>
          <a href="/categories/spices-and-masalas" className="category-card">
            <div className="category-image-wrapper">
              <img src={spicesImg} alt="Spices & Masalas" />
            </div>
            <h3 className="category-name">Spices & Masalas</h3>
          </a>
          </div>
          
          <button className="category-arrow right" onClick={() => scrollSection(categoriesRef, 'right')}>
            <ChevronRight size={20} color="#161915" />
          </button>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="instagram-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Follow Us On Instagram</h2>
            <p className="section-subtitle">Recipes, reels, behind the scenes & authentic Maharashtrian flavours</p>
          </div>
          <a href="https://instagram.com/naikfoods" target="_blank" rel="noopener noreferrer" className="card-btn solid-btn instagram-btn">
            @naikfoods <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="reels-grid">
          {reelData.map((reel) => (
            <a key={reel.id} href={reel.url} target="_blank" rel="noopener noreferrer" className="reel-card">
              <img src={reel.image} alt="Instagram Reel" className="reel-image" />
              <div className="reel-play-overlay">
                <autoPlay color="#ffffff" fill="#ffffff" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="featured-categories-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Popular Products</h2>
            <p className="section-subtitle" style={{ marginBottom: '0px' }}>Authentic regional specialties curated for you.</p>
          </div>
        </div>

        <div className="categories-slider-wrapper">
          <button className="category-arrow left" onClick={() => scrollSection(categoriesRef2, 'left')}>
            <ChevronLeft size={20} color="#161915" />
          </button>
          
          <div className="categories-slider-container" ref={categoriesRef2}>
            <a href="/categories/snacks-and-namkeen" className="category-card">
            <div className="category-image-wrapper">
              <img src={snacksImg} alt="Snacks and Namkeen" />
            </div>
            <h3 className="category-name">Snacks and Namkeen</h3>
          </a>
          <a href="/categories/pickles-and-condiments" className="category-card">
            <div className="category-image-wrapper">
              <img src={picklesImg} alt="Pickles and Condiments" />
            </div>
            <h3 className="category-name">Pickles & Condiments</h3>
          </a>
          <a href="/categories/sweets-and-bakery" className="category-card">
            <div className="category-image-wrapper">
              <img src={sweetsImg} alt="Sweets & Bakery" />
            </div>
            <h3 className="category-name">Sweets & Bakery</h3>
          </a>
          <a href="/categories/dairy-and-beverages" className="category-card">
            <div className="category-image-wrapper">
              <img src={dairyImg} alt="Dairy & Beverages" />
            </div>
            <h3 className="category-name">Dairy & Beverages</h3>
          </a>
          <a href="/categories/mukhvas-and-digestives" className="category-card">
            <div className="category-image-wrapper">
              <img src={mukhvasImg} alt="Mukhvas & Digestives" />
            </div>
            <h3 className="category-name">Mukhvas & Digestives</h3>
          </a>
          <a href="/categories/spices-and-masalas" className="category-card">
            <div className="category-image-wrapper">
              <img src={spicesImg} alt="Spices & Masalas" />
            </div>
            <h3 className="category-name">Spices & Masalas</h3>
          </a>
          </div>
          
          <button className="category-arrow right" onClick={() => scrollSection(categoriesRef2, 'right')}>
            <ChevronRight size={20} color="#161915" />
          </button>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="featured-categories-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle" style={{ marginBottom: '0px' }}>Authentic regional specialties curated for you.</p>
          </div>
        </div>

        <div className="categories-slider-wrapper">
          <button className="category-arrow left" onClick={() => scrollSection(categoriesRef3, 'left')}>
            <ChevronLeft size={20} color="#161915" />
          </button>
          
          <div className="categories-slider-container" ref={categoriesRef3}>
            <a href="/categories/snacks-and-namkeen" className="category-card">
            <div className="category-image-wrapper">
              <img src={snacksImg} alt="Snacks and Namkeen" />
            </div>
            <h3 className="category-name">Snacks and Namkeen</h3>
          </a>
          <a href="/categories/pickles-and-condiments" className="category-card">
            <div className="category-image-wrapper">
              <img src={picklesImg} alt="Pickles and Condiments" />
            </div>
            <h3 className="category-name">Pickles & Condiments</h3>
          </a>
          <a href="/categories/sweets-and-bakery" className="category-card">
            <div className="category-image-wrapper">
              <img src={sweetsImg} alt="Sweets & Bakery" />
            </div>
            <h3 className="category-name">Sweets & Bakery</h3>
          </a>
          <a href="/categories/dairy-and-beverages" className="category-card">
            <div className="category-image-wrapper">
              <img src={dairyImg} alt="Dairy & Beverages" />
            </div>
            <h3 className="category-name">Dairy & Beverages</h3>
          </a>
          <a href="/categories/mukhvas-and-digestives" className="category-card">
            <div className="category-image-wrapper">
              <img src={mukhvasImg} alt="Mukhvas & Digestives" />
            </div>
            <h3 className="category-name">Mukhvas & Digestives</h3>
          </a>
          <a href="/categories/spices-and-masalas" className="category-card">
            <div className="category-image-wrapper">
              <img src={spicesImg} alt="Spices & Masalas" />
            </div>
            <h3 className="category-name">Spices & Masalas</h3>
          </a>
          </div>
          
          <button className="category-arrow right" onClick={() => scrollSection(categoriesRef3, 'right')}>
            <ChevronRight size={20} color="#161915" />
          </button>
        </div>
      </section>

      {/* Shop by Region Section */}
      <section className="shop-by-region-section">
        <div className="section-header" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <div>
            <h2 className="section-title">Shop by Region</h2>
            <p className="section-subtitle" style={{ marginBottom: '0px' }}>Discover authentic flavors from across Maharashtra</p>
          </div>
        </div>

        <div className="region-tabs-container">
          <div className="region-tabs">
            {regions.map((region) => (
              <button
                key={region}
                className={`region-tab ${activeRegion === region ? 'active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        <div className="categories-slider-wrapper" style={{ marginTop: '30px' }}>
          <button className="category-arrow left" onClick={() => scrollSection(shopByRegionRef, 'left')}>
            <ChevronLeft size={20} color="#161915" />
          </button>
          
          <div className="categories-slider-container" ref={shopByRegionRef}>
            {(regionProducts[activeRegion] || []).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name" style={{fontSize: '15px'}}>{product.name}</h3>
                  <div className="product-meta" style={{color: '#9ca3af', marginBottom: '15px'}}>{product.desc}</div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                    <div className="product-price" style={{marginBottom: 0, fontSize: '16px', color: '#1f2937'}}>{product.price}</div>
                    <div style={{fontSize: '12px', color: '#9ca3af'}}>{product.weight}</div>
                  </div>
                  <button className="add-to-cart-btn" style={{backgroundColor: '#65c466', color: 'white'}}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <button className="category-arrow right" onClick={() => scrollSection(shopByRegionRef, 'right')}>
            <ChevronRight size={20} color="#161915" />
          </button>
        </div>
      </section>



      {/* Newsletter Section */}
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

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919730046247" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Index;
