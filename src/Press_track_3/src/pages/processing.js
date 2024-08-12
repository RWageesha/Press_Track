import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/ProcessingOrders.css';

const ProcessingOrders = () => {
  const navigate = useNavigate();

  const handleRowClick = (orderId) => {
    navigate(`/orders/processing/${orderId}`);
  };

  const orders = [
    { id: 1, name: 'Order #1', status: 'Design Department' },
    { id: 2, name: 'Order #2', status: 'Printing Department' },
    { id: 3, name: 'Order #3', status: 'Cutting Department' },
    { id: 4, name: 'Order #4', status: 'Design Department' },
    { id: 5, name: 'Order #5', status: 'Printing Department' },
    { id: 6, name: 'Order #6', status: 'Cutting Department' },
  ];

  return (
    <div className="processing-order-container">
      <div className="processing-order-header">
        <h2>PROCESSING ORDERS</h2>
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
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} onClick={() => handleRowClick(order.id)}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessingOrders;
