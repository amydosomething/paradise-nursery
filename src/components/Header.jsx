import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  
  // Don't show header on landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          Paradise Nursery
        </Link>
        
        <nav className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}
          >
            Plants
          </Link>
          <Link 
            to="/cart" 
            className={location.pathname === '/cart' ? 'nav-link cart-link' : 'nav-link cart-link'}
          >
            <div className="cart-icon-wrapper">
              <svg 
                className="cart-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
