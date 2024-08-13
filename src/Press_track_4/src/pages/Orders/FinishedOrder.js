// src/components/Order/FinishedOrder.js
import React from 'react';
import './finishedorders.css'; // Import the CSS file

const FinishedOrder = () => {
    return (
        <div>
            <h2>Finished Orders</h2>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example row; replace with dynamic data */}
                    <tr>
                        <td>001</td>
                        <td>John Doe</td>
                        <td>2024-08-01</td>
                        <td>Finished</td>
                        <td>$100.00</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Jane Smith</td>
                        <td>2024-08-03</td>
                        <td>Finished</td>
                        <td>$175.00</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default FinishedOrder;

