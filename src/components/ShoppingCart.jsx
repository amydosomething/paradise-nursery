import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalCost } = useSelector((state) => state.cart);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Add some beautiful plants to your cart!</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-summary-top">
          <p className="total-items">Total Items: <span>{totalQuantity}</span></p>
          <p className="total-cost">Total Cost: <span>${totalCost.toFixed(2)}</span></p>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price}</p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn decrease"
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="quantity-btn increase"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
                
                <p className="subtotal">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
                
                <button 
                  className="delete-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
