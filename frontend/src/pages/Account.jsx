import React, { useState } from 'react';
import { User, Package, MapPin, LogOut } from 'lucide-react';
import './Account.css';

const MOCK_ORDERS = [
  {
    id: 'ORD-10023',
    date: '2026-08-15',
    total: 1250,
    status: 'Delivered',
    items: 4
  },
  {
    id: 'ORD-10045',
    date: '2026-09-02',
    total: 890,
    status: 'Processing',
    items: 2
  }
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="account-panel">
            <h2 className="panel-title">Personal Information</h2>
            <form className="account-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="Priya" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="Naik" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="priya.naik@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" defaultValue="+91 98765 43210" />
              </div>
              <button type="button" className="save-changes-btn">Save Changes</button>
            </form>
          </div>
        );
      case 'orders':
        return (
          <div className="account-panel">
            <h2 className="panel-title">Order History</h2>
            <div className="orders-list">
              {MOCK_ORDERS.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div>
                      <span className="order-id">{order.id}</span>
                      <span className="order-date"> • {order.date}</span>
                    </div>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p>{order.items} items</p>
                    <p className="order-total">Total: ₹{order.total}</p>
                  </div>
                  <button className="view-order-btn">View Details</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'addresses':
        return (
          <div className="account-panel">
            <div className="panel-header">
              <h2 className="panel-title">Saved Addresses</h2>
              <button className="add-address-btn">+ Add New</button>
            </div>
            <div className="address-card">
              <div className="address-badge">Default</div>
              <h3 className="address-name">Home</h3>
              <p className="address-text">
                Seva Mitra mandal chauk, near Fadget polis chauki<br/>
                Shukrawar Peth, Pune 411002<br/>
                Maharashtra, India
              </p>
              <div className="address-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-page">
      <div className="account-container">
        
        {/* Sidebar */}
        <div className="account-sidebar">
          <div className="user-profile-summary">
            <div className="avatar-circle">PN</div>
            <div>
              <h3 className="user-name">Priya Naik</h3>
              <p className="user-email">priya.naik@example.com</p>
            </div>
          </div>

          <nav className="account-nav">
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <User size={18} /> My Profile
            </button>
            <button 
              className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <Package size={18} /> Orders
            </button>
            <button 
              className={`nav-item ${activeTab === 'addresses' ? 'active' : ''}`}
              onClick={() => setActiveTab('addresses')}
            >
              <MapPin size={18} /> Addresses
            </button>
            <button className="nav-item logout">
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="account-content">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};

export default Account;
