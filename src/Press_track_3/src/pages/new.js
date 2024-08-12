import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation
import '../css/NewOrder.css';

const New = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleRowClick = (orderId) => {
    navigate(`/orders/details/${orderId}`);
  };

  return (
    <div className="new-order-container">
      <div className="new-order-header">
        <h2>New Orders</h2>
        <Link to="/orders" className="back-icon1">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>order name</th>
              <th>date & time</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleRowClick(1)}>
              <td>1</td>
              <td>Order #1</td>
              <td>2024-08-09 10:00 AM</td>
              <td>Description of Order #1</td>
            </tr>
            <tr onClick={() => handleRowClick(2)}>
              <td>2</td>
              <td>Order #2</td>
              <td>2024-08-09 11:00 AM</td>
              <td>Description of Order #2</td>
            </tr>
            <tr onClick={() => handleRowClick(3)}>
              <td>3</td>
              <td>Order #3</td>
              <td>2024-08-09 12:00 PM</td>
              <td>Description of Order #3</td>
            </tr>
            <tr onClick={() => handleRowClick(4)}>
              <td>4</td>
              <td>Order #4</td>
              <td>2024-08-09 01:00 PM</td>
              <td>Description of Order #4</td>
            </tr>
            <tr onClick={() => handleRowClick(5)}>
              <td>5</td>
              <td>Order #5</td>
              <td>2024-08-09 02:00 PM</td>
              <td>Description of Order #5</td>
            </tr>
            <tr onClick={() => handleRowClick(6)}>
              <td>6</td>
              <td>Order #6</td>
              <td>2024-08-09 03:00 PM</td>
              <td>Description of Order #6</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default New;
