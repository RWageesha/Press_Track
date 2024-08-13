import React from 'react';
import './neworder.css'; // Ensure to import your CSS file

const NewOrder = () => {
    // Sample data for illustration
    const orders = [
        { id: 1, customer: 'John Doe', date: '2024-08-10', status: 'Pending' },
        { id: 2, customer: 'Jane Smith', date: '2024-08-11', status: 'Completed' },
        { id: 3, customer: 'Alice Johnson', date: '2024-08-12', status: 'Processing' },
        { id: 4, customer: 'Bob Brown', date: '2024-08-13', status: 'Cancelled' }
    ];

    return (
        <div>
            <h2>New Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewOrder;
