import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/OrderFinished.css';

const OrderFinished = () => {
  const { orderId } = useParams(); // Get orderId from the route parameters

  return (
    <div className="order-finished-container">
      <div className="order-finished-header">
        <h2>ORDER {orderId}</h2>
        <Link to="/orders/finished" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="order-finished-content">
        <div className="left-section">
          <div className="bill-box">
            <i className="bi bi-file-earmark-text"></i>
            <p>BILL</p>
          </div>
          <button className="send-bill-btn">Send the Bill</button>
          <div className="order-details-box">
            <p>Order Details</p>
            <div className="receipt-box">
              <i className="bi bi-receipt"></i>
              <p>RECEIPT</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <button className="edit-bill-btn">Edit the Bill</button>
          <button className="finish-order-btn">Finish the Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderFinished;
