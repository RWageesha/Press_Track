import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const incomeData = [12000, 15000, 18000, 20000, 22000, 24000, 26000];
  const expenseData = [5000, 7000, 8000, 10000, 12000, 14000, 16000];

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income and Expenses Overview',
        font: {
            size: 20, // Set the font size to 24px
            weight: 'bold', // Optional: make the font bold
          },
      },
    },
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(56, 142, 60, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
      },
    ],
  };

  return (
    <div className="home-container">
       <h2 className="orders-header">Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Customers</h3>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h3>Suppliers</h3>
          <p>45</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart">
          <Bar options={barOptions} data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;