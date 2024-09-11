import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Order.css';

const Orders = () => {
  return (
    <div className="orders-container ">
       <div className="orders-header">
        <h2>ORDERS</h2>
      </div> 
      <div className="orders-grid">
        <Link to="/orders/new" className="order-card-1">New Order</Link>
        <Link to="/orders/confirmed" className="order-card-2">Confirmed Order</Link>
        <Link to="/orders/processing" className="order-card-3">Processing Order</Link>
        <Link to="/orders/finished" className="order-card-4">Finished Order</Link>
      </div>
    </div>
  );
};

export default Orders;
