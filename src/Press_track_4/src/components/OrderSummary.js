import React from 'react';

const OrderSummary = ({ totalOrders, pendingOrders, recentOrders }) => {
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="metric">
                <h3>Total Orders</h3>
                <p>{totalOrders}</p>
            </div>
            <div className="metric">
                <h3>Pending Orders</h3>
                <p>{pendingOrders}</p>
            </div>
            <div className="recent-orders">
                <h3>Recent Orders</h3>
                <ul>
                    {recentOrders.map((order, index) => (
                        <li key={index}>{order}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderSummary;
