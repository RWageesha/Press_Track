import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/OrderProcessing.css';

const orders = [
  { id: 1, status: 'Design Department' },
  { id: 2, status: 'Printing Department' },
  { id: 3, status: 'Cutting Department' },
  { id: 4, status: 'Design Department' },
  { id: 5, status: 'Printing Department' },
  { id: 6, status: 'Cutting Department' },
];

const OrderProcessing = () => {
  const { orderId } = useParams(); // Get orderId from the route parameters
  const order = orders.find((order) => order.id === parseInt(orderId));

  const getStatusClass = (status) => {
    switch (status) {
      case 'Design Department':
        return 'active design';
      case 'Printing Department':
        return 'active printing';
      case 'Cutting Department':
        return 'active cutting';
      default:
        return '';
    }
  };

  return (
    <div className="order-processing-container">
      <div className="order-processing-header">
        <h2>ORDER {orderId}</h2>
        <Link to="/orders/processing" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="order-processing-content">
        <div className="department-section">
          <div className={`department ${getStatusClass(order.status) === 'active design' ? 'active' : ''}`}>
            <div className="icon-circle"><i className="bi bi-pencil-square"></i></div>
            <p>Design Department</p>
          </div>
          <div className={`line ${getStatusClass(order.status) === 'active design' ? 'active-line' : ''}`}></div>
          <div className={`department ${getStatusClass(order.status) === 'active printing' ? 'active' : ''}`}>
            <div className="icon-circle"><i className="bi bi-printer"></i></div>
            <p>Printing Department</p>
          </div>
          <div className={`line ${getStatusClass(order.status) === 'active printing' ? 'active-line' : ''}`}></div>
          <div className={`department ${getStatusClass(order.status) === 'active cutting' ? 'active' : ''}`}>
            <div className="icon-circle"><i className="bi bi-scissors"></i></div>
            <p>Cutting Department</p>
          </div>
        </div>
        <button className="finish-order-btn">Finish the Order</button>
      </div>
    </div>
  );
};

export default OrderProcessing;
