import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/View.css';

const ViewPage = () => {
  const navigate = useNavigate();

  return (
    <div className="vreports-container">
      <div className="vreports-header">
        <h2>Reports</h2>
        <div className="back-icon1" onClick={() => navigate('/reports')}>
          <i className="bi bi-arrow-left-circle"></i> {/* Back icon */}
        </div>
      </div>
      <div className="vreports-grid">
        <div className="vreport-card" onClick={() => navigate('/view/monthly')}>
          Monthly Reports
        </div>
        <div className="vreport-card" onClick={() => navigate('/view/yearly')}>
          Yearly Reports
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
