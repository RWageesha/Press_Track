import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Income.css'; // Ensure this CSS file exists

const incomeData = [
  { orderName: 'Order #1', date: '01/01/2024', income: '1000.00' },
  { orderName: 'Order #2', date: '02/01/2024', income: '1500.00' },
  { orderName: 'Order #3', date: '03/01/2024', income: '2000.00' },
  { orderName: 'Order #4', date: '04/01/2024', income: '2500.00' },
  { orderName: 'Order #5', date: '05/01/2024', income: '3000.00' },
  { orderName: 'Order #6', date: '06/01/2024', income: '3500.00' },
];

const totalIncome = incomeData.reduce((total, order) => total + parseFloat(order.income), 0);

const Income = () => {
  return (
    <div className="income-container">
      <div className="income-header">
        <h2>Incomes</h2>
        <Link to="/reports" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="income-table-wrapper">
        <div className="income-table-scroll">
          <table className="income-table">
            <thead>
              <tr>
                <th>Order Name</th>
                <th>Date</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              {incomeData.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderName}</td>
                  <td>{order.date}</td>
                  <td>{order.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="income-total">
          <table className="income-table">
            <tbody>
              <tr className="total-row">
                <td colSpan="2">Total Income</td>
                <td></td>
                <td>RS: {totalIncome.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;
