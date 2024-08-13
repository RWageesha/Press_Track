import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import Components
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import NewOrder from './pages/Orders/NewOrder';
import ConfirmedOrder from './pages/Orders/ConfirmedOrder';
import ProcessingOrder from './pages/Orders/ProcessingOrder';
import FinishedOrder from './pages/Orders/FinishedOrder';
import Stock from './pages/Stock';
import Sections from './pages/Sections';
import Supplier from './pages/Supplier';
import Reports from './pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />}>
              <Route path="new" element={<NewOrder />} />
              <Route path="confirmed" element={<ConfirmedOrder />} />
              <Route path="processing" element={<ProcessingOrder />} />
              <Route path="finished" element={<FinishedOrder />} />
            </Route>
            <Route path="/stock" element={<Stock />} />
            <Route path="/sections" element={<Sections />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
