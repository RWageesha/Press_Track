import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 

import Orders from './pages/Orders'; 
import NewOrder from './pages/new'; 
import ConfirmedOrder from './pages/confirmed'; 
import ProcessingOrder from './pages/processing'; 
import FinishedOrder from './pages/finished';   
import OrderDetails from './pages/OrderDetails'; 
import OrderDetails1 from './pages/OrderDetails1';
import OrderProcessing from './pages/OrderProcessing';
import OrderFinished from './pages/OrderFinished';

import Stock from './pages/Stock';
import StockItem from './pages/StockItem';

import Sections from './pages/Sections';
import Printing from './pages/printing';
import Binding from './pages/binding';
import Laminating from './pages/laminating';
import Cutting from './pages/cutting';
import Packing from './pages/packing';
import Folding from './pages/folding';

import Supplier from './pages/Supplier';
import Reports from './pages/Reports';
import Income from './pages/income'; 
import Expenses from './pages/expenses'; 
import View from './pages/view'; 
import Generate from './pages/generate';

import MonthlyReportsPage from './pages/MonthlyReportsPage';
import YearlyReportsPage from './pages/YearlyReportsPage';
import ReportDisplayPage from './pages/ReportDisplayPage';

import Customers from './pages/customers';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; // Add a Home component if not already created

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login and Signup routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Home route */}
        <Route path="/home" element={<ProtectedRoute component={Home} />} />

        {/* Protected routes that require login */}
        <Route path="/orders" element={<ProtectedRoute component={Orders} />} />
        <Route path="/orders/new" element={<ProtectedRoute component={NewOrder} />} />
        <Route path="/orders/confirmed" element={<ProtectedRoute component={ConfirmedOrder} />} />
        <Route path="/orders/processing" element={<ProtectedRoute component={ProcessingOrder} />} />
        <Route path="/orders/finished" element={<ProtectedRoute component={FinishedOrder} />} />
        <Route path="/orders/details/:orderId" element={<ProtectedRoute component={OrderDetails} />} />
        <Route path="/orders/details1/:orderId" element={<ProtectedRoute component={OrderDetails1} />} />
        <Route path="/orders/processing/:orderId" element={<ProtectedRoute component={OrderProcessing} />} />
        <Route path="/orders/finished/:orderId" element={<ProtectedRoute component={OrderFinished} />} />

        <Route path="/stock" element={<ProtectedRoute component={Stock} />} />
        <Route path="/stock/:itemId" element={<ProtectedRoute component={StockItem} />} />

        <Route path="/sections" element={<ProtectedRoute component={Sections} />} />
        <Route path="/sections/printing" element={<ProtectedRoute component={Printing} />} />
        <Route path="/sections/binding" element={<ProtectedRoute component={Binding} />} />
        <Route path="/sections/laminating" element={<ProtectedRoute component={Laminating} />} />
        <Route path="/sections/cutting" element={<ProtectedRoute component={Cutting} />} />
        <Route path="/sections/packing" element={<ProtectedRoute component={Packing} />} />
        <Route path="/sections/folding" element={<ProtectedRoute component={Folding} />} />

        <Route path="/supplier" element={<ProtectedRoute component={Supplier} />} />

        <Route path="/reports" element={<ProtectedRoute component={Reports} />} />
        <Route path="/reports/income" element={<ProtectedRoute component={Income} />} />
        <Route path="/reports/expenses" element={<ProtectedRoute component={Expenses} />} />
        <Route path="/reports/generate" element={<ProtectedRoute component={Generate} />} />
        <Route path="/reports/view" element={<ProtectedRoute component={View} />} />
        <Route path="/view" element={<ProtectedRoute component={View} />} />
        <Route path="/view/monthly" element={<ProtectedRoute component={MonthlyReportsPage} />} />
        <Route path="/view/yearly" element={<ProtectedRoute component={YearlyReportsPage} />} />
        <Route path="/view/monthly/:year/:month" element={<ProtectedRoute component={ReportDisplayPage} />} />
        <Route path="/view/yearly/:year" element={<ProtectedRoute component={ReportDisplayPage} />} />

        <Route path="/customers" element={<ProtectedRoute component={Customers} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = Boolean(localStorage.getItem('auth')); // Simple authentication check
  return isAuthenticated ? (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Component />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default App;
