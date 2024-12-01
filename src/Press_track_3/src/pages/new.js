import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/NewOrder.css';

const New = () => {
  const navigate = useNavigate();

  const handleRowClick = (order) => {
    navigate(`/orders/details/${order.id}`, { state: order });
  };

  const orders = [
    { id: 1, name: 'Order #1', dateTime: '2024-08-09 10:00 AM', description: 'Description of Order #1', price: 10, userEmail: "amandi@gmail.com" },
    { id: 2, name: 'Order #2', dateTime: '2024-08-09 11:00 AM', description: 'Description of Order #2', price: 20, userEmail: "pinipa@gmail.com" },
    { id: 3, name: 'Order #3', dateTime: '2024-08-09 12:00 PM', description: 'Description of Order #3', price: 15, userEmail: "nikini@gmail.com" },
    { id: 4, name: 'Order #4', dateTime: '2024-08-09 01:00 PM', description: 'Description of Order #4', price: 18, userEmail: "wageesha@gmail.com" },
    { id: 5, name: 'Order #5', dateTime: '2024-08-09 02:00 PM', description: 'Description of Order #5', price: 24, userEmail: "vethum@gmail.com" },
    { id: 6, name: 'Order #6', dateTime: '2024-08-09 03:00 PM', description: 'Description of Order #6', price: 8, userEmail: "amandi@gmail.com" },
  ];

  return (
    <div className="new-order-container">
      <div className="new-order-header">
        <h2>NEW ORDERS</h2>
        <Link to="/orders" className="back-icon1">
          <i className="bi bi-arrow-left-circle"></i>
        </Link>
      </div>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Name</th>
              <th>Date & Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} onClick={() => handleRowClick(order)}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.dateTime}</td>
                <td>{order.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default New;
