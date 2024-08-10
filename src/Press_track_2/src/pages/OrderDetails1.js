import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/OrderDetails1.css';

const OrderDetails = () => {
  const { orderId } = useParams(); // Get orderId from the route parameters
  const [showMessage, setShowMessage] = useState(false); // State to manage message display

  const handleConfirmClick = () => {
    setShowMessage(true); // Show message when confirm button is clicked
  };

  const handleOkClick = () => {
    setShowMessage(false); // Hide message when OK button is clicked
  };

  return (
    <div className="order-details-container">
      <div className="order-details-header">
        <h2>ORDER {orderId}</h2>
        <Link to="/orders/confirmed" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="order-details-content">
        <div className="combined-box">
          <div className="order-details-box">
            <p>Order Details</p>
            {showMessage && (
              <div className="message-overlay">
                <div className="message-box">
                  <p>Attach the Receipt before confirm</p>
                  <div className="message-line"></div> {/* Line under the message */}
                  <button className="ok-btn" onClick={handleOkClick}>OK</button>
                </div>
              </div>
            )}
          </div>
          <div className="separator-line"></div> {/* Line between sections */}
          <div className="receipt-box">
            <i className="bi bi-receipt"></i>
            <p>Receipt</p>
          </div>
        </div>
        <button className="confirm-order-btn" onClick={handleConfirmClick}>Confirm Order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
