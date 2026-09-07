import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, Search, Heart } from 'lucide-react';
import './Shop.css';

// Importing existing assets to use as mock images
import prod1 from '../assets/images/image15.png';
import prod2 from '../assets/images/image16.png';
import prod3 from '../assets/images/image4.png';
import prod4 from '../assets/images/image5.png';
import prod5 from '../assets/images/image6.png';

const MOCK_CATEGORIES = [
  { id: 'all', name: 'All Categories', image: null },
  { id: 'snacks', name: 'Snacks and Namkeen', image: prod1 },
  { id: 'pickles', name: 'Pickles & Condiments', image: prod2 },
  { id: 'sweets', name: 'Sweets & Bakery', image: prod3 },
  { id: 'dairy', name: 'Dairy & Beverages', image: prod4 },
  { id: 'mukhvas', name: 'Mukhvas & Supari', image: prod5 }
];

const MOCK_REGIONS = [
  { id: 'pune', name: 'Pune', count: 84 },
  { id: 'vidarbha', name: 'Vidarbha', count: 1 },
  { id: 'konkan', name: 'Konkan', count: 2 },
  { id: 'nashik', name: 'Nashik', count: 1 }
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Multi Millet Noodles',
    subtitle: 'Millet Goodness, Crunchy, Delight',
    weight: '180g',
    price: 100,
    image: prod1,
    isHealthy: false
  },
  {
    id: 2,
    title: 'Aaswad Mitha Paan',
    subtitle: 'Sweet Paan, Tasty, Fresh',
    weight: '100g',
    price: 150, // Making price non-zero for better UI representation
    image: prod2,
    isHealthy: false
  },
  {
    id: 3,
    title: 'Shahi Mukhwas',
    subtitle: 'Royal Flavor, Cool, Fresh',
    weight: '100g',
    price: 120,
    image: prod3,
    isHealthy: false
  },
  {
    id: 4,
    title: 'Pearl Millet Noodles',
    subtitle: 'Bajra Rich, Tasty, Noodles',
    weight: '180g',
    price: 120,
    image: prod4,
    isHealthy: false
  },
  {
    id: 5,
    title: 'Little Millet Noodles',
    subtitle: 'Zero Maida, Zero Junk',
    weight: '180g',
    price: 100,
    image: prod5,
    isHealthy: false
  },
  {
    id: 6,
    title: 'Foxtail Millet Noodles',
    subtitle: 'Tasty, Fast, Good',
    weight: '180g',
    price: 100,
    image: prod1,
    isHealthy: false
  },
  {
    id: 7,
    title: 'Jowar Palak Khakhra',
    subtitle: 'Crunchy, Green, Tasty',
    weight: '200g',
    price: 80,
    image: prod2,
    isHealthy: true
  },
  {
    id: 8,
    title: 'Chorafali Khakhra',
    subtitle: 'Spicy, Crisp, Fresh',
    weight: '200g',
    price: 90,
    image: prod3,
    isHealthy: true
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isRegionOpen, setIsRegionOpen] = useState(true);
  const [isVendorOpen, setIsVendorOpen] = useState(false);

  return (
    <div className="shop-page">
      {/* Hero Banner */}
      <section className="shop-hero">
        <h1 className="shop-hero-title" style={{color:"white"}}>Our Store</h1>
        <div className="shop-breadcrumb">
          <a href="/">Home</a> <ChevronRight size={16} className="breadcrumb-icon" /> <span>Store</span>
        </div>
      </section>

      <div className="shop-container">
        {/* Category Carousel */}
        <div className="category-carousel-wrapper">
          <button className="carousel-nav-btn prev"><ChevronLeft size={20} /></button>
          
          <div className="category-carousel">
            {MOCK_CATEGORIES.map(category => (
              <button 
                key={category.id}
                className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.id === 'all' ? (
                  <div className="all-cats-icon">
                    <span className="cubes-icon">⛋</span>
                  </div>
                ) : (
                  <img src={category.image} alt={category.name} className="category-img" />
                )}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <button className="carousel-nav-btn next"><ChevronRight size={20} /></button>
        </div>

        {/* Main Content Layout */}
        <div className="shop-main-layout">
          {/* Sidebar */}
          <aside className="shop-sidebar">
            <div className="sidebar-search">
              <Search className="search-icon" size={18} />
              <input type="text" placeholder="Search products..." className="search-input" />
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-title">Sort by</h4>
              <select className="sort-select">
                <option value="newest">Newest first</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="sidebar-accordion">
              <button 
                className="accordion-header"
                onClick={() => setIsRegionOpen(!isRegionOpen)}
              >
                <h4 className="sidebar-title m-0">Region</h4>
                {isRegionOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isRegionOpen && (
                <div className="accordion-content">
                  {MOCK_REGIONS.map(region => (
                    <label key={region.id} className="checkbox-label">
                      <div className="checkbox-wrapper">
                        <input type="checkbox" />
                        <span className="checkbox-text">{region.name}</span>
                      </div>
                      <span className="checkbox-count">{region.count}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="sidebar-accordion">
              <button 
                className="accordion-header"
                onClick={() => setIsVendorOpen(!isVendorOpen)}
              >
                <h4 className="sidebar-title m-0">Vender</h4>
                {isVendorOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isVendorOpen && (
                <div className="accordion-content">
                  <p className="empty-filter">No vendors available.</p>
                </div>
              )}
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="shop-content">
            <div className="shop-results-header">
              <p>Showing <strong>{MOCK_PRODUCTS.length}</strong> of <strong>115</strong> Authentic Products</p>
            </div>

            <div className="shop-product-grid">
              {MOCK_PRODUCTS.map(product => (
                <div key={product.id} className="shop-product-card">
                  {product.isHealthy && <span className="healthy-badge">Healthy</span>}
                  <button className="heart-btn"><Heart size={18} /></button>
                  
                  <div className="card-image-wrapper">
                    <img src={product.image} alt={product.title} />
                  </div>
                  
                  <div className="card-details">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-subtitle">{product.subtitle}</p>
                    
                    <div className="card-price-row">
                      <span className="card-price">₹{product.price}</span>
                      <span className="card-weight">{product.weight}</span>
                    </div>
                    
                    <button className="add-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
