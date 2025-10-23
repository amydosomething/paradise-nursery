import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where green meets serenity! We are passionate about bringing nature closer to you. Our mission is to provide the finest selection of houseplants that not only beautify your space but also purify the air and promote well-being. From aromatic herbs to medicinal plants and air-purifying varieties, we have something special for every plant lover. Discover the perfect plant companion for your home and let nature transform your living space into a paradise.
          </p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
