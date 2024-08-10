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
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="/orders" />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/new" element={<NewOrder />} />
            <Route path="/orders/confirmed" element={<ConfirmedOrder />} />
            <Route path="/orders/processing" element={<ProcessingOrder />} />
            <Route path="/orders/finished" element={<FinishedOrder />} />
            <Route path="/orders/details/:orderId" element={<OrderDetails />} />
            <Route path="/orders/details1/:orderId" element={<OrderDetails1 />} />
            <Route path="/orders/processing/:orderId" element={<OrderProcessing />} />
            <Route path="/orders/finished/:orderId" element={<OrderFinished />} />

            <Route path="/stock" element={<Stock />} />
            <Route path="/stock/:itemId" element={<StockItem />} />

            <Route path="/sections" element={<Sections />} />
            <Route path="/sections/printing" element={<Printing />} />
            <Route path="/sections/binding" element={<Binding />} />
            <Route path="/sections/laminating" element={<Laminating />} />
            <Route path="/sections/cutting" element={<Cutting />} />
            <Route path="/sections/packing" element={<Packing />} />
            <Route path="/sections/folding" element={<Folding />} />

            <Route path="/supplier" element={<Supplier />} />

            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/income" element={<Income />} />
            <Route path="/reports/expenses" element={<Expenses />} />
            <Route path="/reports/generate" element={<Generate />} />
            <Route path="/reports/view" element={<View />} />
            <Route path="/view" element={<View />} />
            <Route path="/view/monthly" element={<MonthlyReportsPage />} />
            <Route path="/view/yearly" element={<YearlyReportsPage />} />
            <Route path="/view/monthly/:year/:month" element={<ReportDisplayPage />} />
            <Route path="/view/yearly/:year" element={<ReportDisplayPage />} />

            <Route path="/customers" element={<Customers />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
