import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Printing.css'; // Use the same CSS file for consistency

const orders = [
  { id: 1, name: 'Order 01', status: 'on going process' },
  { id: 2, name: 'Order 02', status: 'Finished process' },
  { id: 3, name: 'Order 03', status: 'on going process' },
  { id: 4, name: 'Order 04', status: 'on going process' },
  { id: 5, name: 'Order 05', status: 'on going process' },
  { id: 6, name: 'Order 06', status: 'Finished process' },
];

const Packing = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders.filter(order =>
    order.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="printing-container">
      <div className="printing-header">
        <h2>Packing</h2>
        <Link to="/sections" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <i className="bi bi-search search-icon"></i>
      </div>
      <div className="order-table">
        {filteredOrders.length > 0 ? (
          <table>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.name}</td>
                  <td className={order.status.includes('on going') ? 'ongoing-status' : 'finished-status'}>
                    <span className={order.status.includes('on going') ? 'ongoing-dot' : 'finished-dot'}></span>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching orders found</p>
        )}
      </div>
    </div>
  );
};

export default Packing;
