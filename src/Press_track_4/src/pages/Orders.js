import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './orders.css'; // Ensure to import the CSS file

const Orders = () => {
    return (
        <div>
             <h2 className="orders-header">Orders</h2>
            <nav>
                <ul className="order-buttons-container">
                    <li><Link to="new" className="order-button new-order">New Orders</Link></li>
                    <li><Link to="confirmed" className="order-button confirmed-order">Confirmed Orders</Link></li>
                    <li><Link to="processing" className="order-button processing-order">Processing Orders</Link></li>
                    <li><Link to="finished" className="order-button finished-order">Finished Orders</Link></li>
                </ul>
            </nav>
           
            <Outlet />
        </div>
    );
};

export default Orders;
