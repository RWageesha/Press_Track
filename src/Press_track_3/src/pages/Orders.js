import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Order.css';

const Orders = () => {
  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2>Orders</h2>
      </div>
      <div className="orders-grid">
        <Link to="/orders/new" className="order-card">New Order</Link>
        <Link to="/orders/confirmed" className="order-card">Confirmed Order</Link>
        <Link to="/orders/processing" className="order-card">Processing Order</Link>
        <Link to="/orders/finished" className="order-card">Finished Order</Link>
      </div>
    </div>
  );
};

export default Orders;
