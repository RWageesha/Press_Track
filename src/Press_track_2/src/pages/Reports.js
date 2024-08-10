import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Reports.css'; // Ensure this CSS file exists

const Reports = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2>Reports</h2>
      </div>
      <div className="reports-box">
        <div className="reports-grid">
          <div 
            className="report-card" 
            onClick={() => handleNavigation('/reports/income')}
          >
            <p>Income</p>
          </div>
          <div 
            className="report-card" 
            onClick={() => handleNavigation('/reports/expenses')}
          >
            <p>Expenses</p>
          </div>
          <div 
            className="report-card" 
            onClick={() => handleNavigation('/reports/view')}
          >
            <p>Reports</p>
          </div>
          <div 
            className="report-card" 
            onClick={() => handleNavigation('/reports/generate')}
          >
            <p>Generate Reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
