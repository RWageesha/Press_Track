import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Generate.css'; // Ensure this CSS file exists

const reportData = [
  { order: 'Order #1', cost: '500.00', income: '1000.00' },
  { order: 'Order #2', cost: '600.00', income: '1200.00' },
  { order: 'Order #3', cost: '700.00', income: '1400.00' },
  { order: 'Order #4', cost: '800.00', income: '1600.00' },
  { order: 'Order #5', cost: '900.00', income: '1800.00' },
];

const Generate = () => {
  return (
    <div className="generate-container">
      <div className="generate-header">
        <h2>Report Generate</h2>
        <Link to="/reports" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="generate-table">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Cost</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report, index) => (
              <tr key={index}>
                <td>{report.order}</td>
                <td>{report.cost}</td>
                <td>{report.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Generate;
