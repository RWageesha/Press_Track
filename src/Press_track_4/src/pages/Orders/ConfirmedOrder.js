// src/components/Order/ConfirmedOrder.js
import React from 'react';
import './confirmedorder.css'; // Optional: for custom styling

const ConfirmedOrder = () => {
    // Sample data for the table
    const orders = [
        { id: 1, customer: 'John Doe', date: '2024-08-01', amount: '$200.00' },
        { id: 2, customer: 'Jane Smith', date: '2024-08-02', amount: '$350.00' },
        { id: 3, customer: 'Michael Brown', date: '2024-08-03', amount: '$450.00' },
        { id: 4, customer: 'Emily Davis', date: '2024-08-04', amount: '$300.00' },
    ];

    return (
        <div className="confirmed-orders">
            <h2>Confirmed Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConfirmedOrder;

