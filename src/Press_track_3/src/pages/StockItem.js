import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../css/StockItem.css'; // Ensure this CSS file exists

const StockItem = () => {
  const { itemId } = useParams(); // Get itemId from route parameters
  const navigate = useNavigate();
  
  const [item, setItem] = useState(null); // State to store item data
  const [name, setName] = useState('');
  const [quality, setQuality] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Make sure the URL is correct. Use template literals to include itemId dynamically.
        const response = await fetch(`http://localhost:5000/stocks/${itemId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch item');
        }
        
        const data = await response.json();
        setItem(data);
        setName(data.name);
        setQuality(data.quality);
        setQuantity(data.quantity || 1); // Default to 1 if no quantity is provided
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
  
    fetchItem();
  }, [itemId]);  // Only re-run the effect if itemId changes
  

  const handleSave = async () => {
    const updatedItem = { name, quality, quantity };

    try {
      const response = await fetch(`http://localhost:5000/stocks/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Item updated successfully!');
        navigate('/stock'); // Navigate back to the stock list
      } else {
        alert('Failed to update item.');
      }
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Error updating item.');
    }
  };

  // Function to increase quantity
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to decrease quantity, minimum value 1
  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!item) {
    return <div>Loading...</div>; // Show loading until the item data is fetched
  }

  return (
    <div className="stock-item-container">
      <div className="stock-item-header">
        <h2>Edit {item.name}</h2>
        <Link to="/stock" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="stock-item-content">
        <div className="quantity-section">
          <h3>Update Item</h3>
          <div className="quantity-inputs">
            <div className="form-group">
              <label>Item Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="quantity-input"
                style={{ width: 'auto', maxWidth: '100%',}}
              />
            </div>
            <div className="form-group">
              <label>Quality:</label>
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="quantity-input"
                style={{ width: 'auto', maxWidth: '100%',}}
              >
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Excellent">Excellent</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-input"
                min="1"
                style={{ width: 'auto', maxWidth: '100%',}}
              />
            </div>
          </div>
        </div>

        <div className="actions-section">
          <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default StockItem;
