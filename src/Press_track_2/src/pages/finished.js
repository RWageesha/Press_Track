import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/FinishedOrders.css';

const FinishedOrders = () => {
  const navigate = useNavigate();

  const orders = [
    { id: 1, name: 'Order #1', description: 'Order details for Order #1' },
    { id: 2, name: 'Order #2', description: 'Order details for Order #2' },
    { id: 3, name: 'Order #3', description: 'Order details for Order #3' },
    { id: 4, name: 'Order #4', description: 'Order details for Order #4' },
    { id: 5, name: 'Order #5', description: 'Order details for Order #5' },
    { id: 6, name: 'Order #6', description: 'Order details for Order #6' },
  ];

  const handleRowClick = (orderId) => {
    navigate(`/orders/finished/${orderId}`);
  };

  return (
    <div className="finished-order-container">
      <div className="finished-order-header">
        <h2>FINISHED ORDERS</h2>
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
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} onClick={() => handleRowClick(order.id)}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinishedOrders;
