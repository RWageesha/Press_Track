import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Stock.css'; // Make sure you have this CSS file

const Stock = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]); // State to store items
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility
  const [newStock, setNewStock] = useState({ name: '', quality: '' }); // State for form data

  // Fetch items from the backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/stocks');
        const data = await response.json();
        setItems(data); // Populate items with the fetched data
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleRowClick = (itemId) => {
    navigate(`/stock/${itemId}`); // Navigate to the detailed view page
  };

  const handleAddNewClick = () => {
    setIsPopupOpen(true); // Show the popup
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/stocks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStock),
      });

      if (response.ok) {
        const savedItem = await response.json();
        setItems((prevItems) => [...prevItems, savedItem]); // Update the table with the new item
        alert('Stock item added successfully!');
        setIsPopupOpen(false); // Close the popup
        setNewStock({ name: '', quality: '' }); // Reset form
      } else {
        alert('Failed to add stock item.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding stock item.');
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/stocks/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the item from the state (UI update)
        setItems(items.filter(item => item._id !== itemId));
        alert('Stock item deleted successfully!');
      } else {
        alert('Failed to delete stock item.');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Error deleting stock item.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStock({ ...newStock, [name]: value });
  };

  return (
    <div className="stock-container">
      <div className="stock-header"><h2>STOCK</h2></div>
      <div className="order-table">
        <div className='row'>
          <div className="col-md-3 search-container">
            <input type="text" placeholder="Search" className="search-input" />
            <i className="bi bi-search search-icon"></i>
          </div>
          <div className='col-md-2 justify-content-end'>
            <button className='btn btn-primary btn-sm' onClick={handleAddNewClick}>
              Add New <i className='fa fa-plus'></i>
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Item name</th>
              <th>Quality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} onClick={() => handleRowClick(item._id)}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.quality}</td>
                <td>
                  <i
                    className='fa fa-trash text-danger'
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent row click when deleting
                      handleDelete(item._id); // Call delete function
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for adding new stock */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Stock</h3>
            <form>
              <div className="form-group">
                <label>Item Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newStock.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label>Quality:</label>
                <select
                  name="quality"
                  value={newStock.quality}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Quality</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
              <div className="popup-actions">
                <button type="button" className="btn btn-success" onClick={handleSave}>Save</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIsPopupOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stock;
