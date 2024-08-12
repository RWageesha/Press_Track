import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/YearlyReports.css';

const years = [2020, 2021, 2022, 2023]; // Example years

const YearlyReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="yreports-container">
      <div className="yreports-header">
        <h2>Yearly Reports</h2>
        <div className="back-icon1" onClick={() => navigate('/view')}>
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </div>
      </div>
      <div className="yreports-grid">
        {years.map((year) => (
          <div key={year} className="yreport-card" onClick={() => navigate(`/view/yearly/${year}`)}>
            {year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearlyReportsPage;
