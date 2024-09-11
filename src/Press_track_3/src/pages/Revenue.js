import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Revenue.css'; // Ensure this CSS file exists

const Revenue = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  
    return (
        <div className="revenue-container">
            <div className="revenue-header">
                <h2>REVENUE</h2>
            </div>
            <div className="revenue-grid">
                <div 
                    className="revenue-card" 
                    onClick={() => handleNavigation('/revenue/income')}
                >
                    <p>Income</p>
                </div>
                <div 
                    className="revenue-card" 
                    onClick={() => handleNavigation('/revenue/expenses')}
                >
                    <p>Expenses</p>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
