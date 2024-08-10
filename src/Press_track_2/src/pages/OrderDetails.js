import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/OrderDetails.css';

const OrderDetails = () => {
  const { orderId } = useParams(); // Get orderId from the route parameters
  const [activeLayer, setActiveLayer] = useState(1); // State to manage active dropbox layer

  const handleLayerClick = (layer) => {
    setActiveLayer(layer);
  };

  return (
    <div className="order-details-container">
      <div className="order-details-header">
        <h2>ORDER {orderId}</h2>
        <Link to="/orders/new" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="order-details-content">
        <div className="order-details-box">
          <p>Order Details</p>
        </div>
        <div className="order-actions">
          <button className="design-btn">
            <i className="bi bi-pencil-square"></i> Design
          </button>
          <button className="update-design-btn">Update the Design</button>
          <button className="send-to-dept-btn">Send to Design Department</button>
        </div>
        <div className="drop-box">
          <div className="dropbox-icons">
            <button onClick={() => handleLayerClick(1)} className={activeLayer === 1 ? 'active' : ''}>
              <i className="bi bi-book"></i>
            </button>
            <button onClick={() => handleLayerClick(2)} className={activeLayer === 2 ? 'active' : ''}>
              <i className="bi bi-save"></i>
            </button>
          </div>
          <div className="dropbox-content">
            {activeLayer === 1 ? <p>Layer 1 Content</p> : <p>Layer 2 Content</p>}
          </div>
        </div>
        <div className="order-final-actions">
          <div className="button-group">
            <button className="send-quotation-btn">
              <i className="bi bi-envelope"></i> Send Quotation
            </button>
            <button className="dropdown-btn">
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
          <button className="ok-btn">Ok</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
