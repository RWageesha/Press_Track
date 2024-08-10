import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Expenses.css'; // Ensure this CSS file exists

const expensesData = [
  { material: 'Item #1', quantity: '10', expense: '500.00' },
  { material: 'Item #2', quantity: '20', expense: '1500.00' },
  { material: 'Item #3', quantity: '15', expense: '1000.00' },
  { material: 'Item #4', quantity: '5', expense: '750.00' },
  { material: 'Item #5', quantity: '8', expense: '800.00' },
  { material: 'Item #6', quantity: '8', expense: '800.00' },
];

const totalExpense = expensesData.reduce((total, item) => total + parseFloat(item.expense), 0);

const Expenses = () => {
  return (
    <div className="expenses-container">
      <div className="expenses-header">
        <h2>Expenses</h2>
        <Link to="/reports" className="back-icon">
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </Link>
      </div>
      <div className="expenses-table-wrapper">
        <div className="expenses-table-scroll">
          <table className="expenses-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantity</th>
                <th>Expense</th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map((item, index) => (
                <tr key={index}>
                  <td>{item.material}</td>
                  <td>{item.quantity}</td>
                  <td>{item.expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="expenses-total">
          <table className="expenses-table">
            <tbody>
              <tr className="total-row">
                <td colSpan="2">Total Expense</td>
                <td></td>
                <td>RS:{totalExpense.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
