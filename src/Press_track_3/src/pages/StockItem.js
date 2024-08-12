import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/StockItem.css'; // Ensure this CSS file exists

const items = [
  { id: 1, name: 'Item #1', quality: 'Good', quantity: 10 },
  { id: 2, name: 'Item #2', quality: 'Average', quantity: 45 },
  { id: 3, name: 'Item #3', quality: 'Average', quantity: 555},
  { id: 4, name: 'Item #4', quality: 'Average', quantity: 55 },
  { id: 5, name: 'Item #5', quality: 'Average', quantity: 15 },
];

const StockItem = () => {
  const { itemId } = useParams(); // Get itemId from route parameters
  const item = items.find(item => item.id === parseInt(itemId)); // Find the item based on ID

  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  // Function to increase quantity
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to decrease quantity, minimum value 1
  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="stock-item-container">
      <div className="stock-item-header">
        <h2>{item.name}</h2>
        <Link to="/stock" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="stock-item-content">
        <div className="quantity-section">
          <h3>Quantity</h3>
          <div className="quantity-inputs">
            <input type="text" placeholder="Example: 100" className="quantity-input" />
            <input type="text" value={item.id} className="quantity-input" readOnly />
            <input type="text" value={item.name} className="quantity-input" readOnly />
            <input type="text" value={item.quality} className="quantity-input" readOnly />
          </div>
        </div>
        <div className="suppliers-cart-section">
          <div className="suppliers-section">
            <h3>Suppliers</h3>
            <div className="suppliers-list">
              <div className="supplier">Supplier 01</div>
              <div className="supplier">Supplier 02</div>
              <div className="supplier">Supplier 03</div>
            </div>
          </div>
          <div className="cart-section">
            <h3>Cart</h3>
            <div className="cart-box">
              <div className="cart-item">{item.name}</div>
              <div className="quantity-selector">
                <input type="text" value={quantity} readOnly className="quantity-display" />
                <div className="quantity-buttons">
                  <button onClick={handleIncrease} className="quantity-btn">▲</button>
                  <button onClick={handleDecrease} className="quantity-btn">▼</button>
                </div>
              </div>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
