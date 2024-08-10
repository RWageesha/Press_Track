import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../css/Stock.css'; // Make sure you have this CSS file

const Stock = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const items = [
    { id: 1, name: 'Item #1', quality: 'Good' },
    { id: 2, name: 'Item #2', quality: 'Average' },
    { id: 3, name: 'Item #3', quality: 'Good' },
    { id: 4, name: 'Item #4', quality: 'Excellent' },
    { id: 5, name: 'Item #5', quality: 'Poor' },
  ];

  const handleRowClick = (itemId) => {
    navigate(`/stock/${itemId}`); // Navigate to the detailed view page
  };

  return (
    <div className="stock-container">
      <div className="stock-header">
        <h2>STOCK</h2>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Item name</th>
              <th>Quality</th>
            </tr>
          </thead>
          <tbody>
            <tr className="search-row">
              <td colSpan="3">
                <div className="search-container">
                  <input type="text" placeholder="Search" className="search-input" />
                  <i className="bi bi-search search-icon"></i>
                </div>
              </td>
            </tr>
            {items.map((item) => (
              <tr key={item.id} onClick={() => handleRowClick(item.id)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
