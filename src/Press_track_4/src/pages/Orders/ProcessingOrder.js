
import React from 'react';
import './processingorder.css'; // Import the CSS file

const ProcessingOrder = () => {
    return (
        <div>
            <h2>Processing Orders</h2>
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
                        <td>003</td>
                        <td>Alice Johnson</td>
                        <td>2024-08-11</td>
                        <td>Processing</td>
                        <td>$150.00</td>
                    </tr>
                    <tr>
                        <td>004</td>
                        <td>Bob Brown</td>
                        <td>2024-08-12</td>
                        <td>Processing</td>
                        <td>$200.00</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default ProcessingOrder;

