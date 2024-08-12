import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ReportDisplay.css';

const ReportDisplayPage = () => {
  const { year, month } = useParams(); // Get year and month from the URL parameters
  const navigate = useNavigate();

  return (
    <div className="dreports-container">
      <div className="dreports-header">
        <h2>{month ? `${month} ${year} Report` : `${year} Yearly Report`}</h2>
        <div className="back-icon" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </div>
      </div>
      <div className="dreport-content">
        {/* Here you would fetch and display the actual report data based on the year and month */}
        <p>Displaying report data for {month ? `${month} ${year}` : `${year}`}</p>
      </div>
    </div>
  );
};

export default ReportDisplayPage;
