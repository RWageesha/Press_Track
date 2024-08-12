import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MonthlyReports.css';

const years = [2023, 2024, 2025]; 

const MonthlyReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const navigate = useNavigate();

  const handleMonthClick = (month) => {
    navigate(`/view/monthly/${selectedYear}/${month}`);
  };

  return (
    <div className="mreports-container">
      <div className="mreports-header">
        <h2>Monthly Reports</h2>
        <div className="back-icon" onClick={() => navigate('/view')}>
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </div>
      </div>
      <div className="year-select-container">
        <select className="year-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="mreports-grid">
        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
          <div key={month} className="mreport-card" onClick={() => handleMonthClick(month)}>
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyReportsPage;
