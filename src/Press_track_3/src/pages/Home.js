
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../css/Home.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
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
      },
    },
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(34,139,34,0.8)',
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: 'rgba(50,205,50,0.8)',
      },
    ],
  };

  return (
    <div className="home-container">
    <div className="home-header"><h2>HOME</h2></div> 
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

export default Home;
