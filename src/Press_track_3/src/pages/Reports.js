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
        <h2>REPORTS</h2>
      </div>
      
        <div className="reports-grid">
          
          <div 
            className="report-card" 
            onClick={() => handleNavigation('/reports/view')}
          >
            <p> Display Reports</p>
          </div>
         
        </div>
      </div>
 
  );
};

export default Reports;
