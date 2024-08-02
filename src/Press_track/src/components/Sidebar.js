import React, { useState } from 'react';
import {
    FaFileAlt,
    FaBars,
    FaBox,
    FaRegListAlt,
    FaTruck,
    FaChartBar
} from 'react-icons/fa';
import { NavLink, Routes, Route } from 'react-router-dom';
import './sidebar.css';
import Orders from '../pages/Orders';
import Stock from '../pages/Stock';
import Sections from '../pages/Sections';
import Supplier from '../pages/Supplier';
import Reports from '../pages/Reports';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // Start with the sidebar open

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        { path: '/orders', name: 'Orders', icon: <FaFileAlt /> },
        { path: '/stock', name: 'Stock', icon: <FaBox /> },
        { path: '/sections', name: 'Sections', icon: <FaRegListAlt /> },
        { path: '/supplier', name: 'Supplier', icon: <FaTruck /> },
        { path: '/reports', name: 'Reports', icon: <FaChartBar /> }
    ];

    return (
        <div className={`container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo" style={{ display: isOpen ? 'block' : 'none' }}>Logo</h1>
                    <div className="bars" onClick={toggle}>
                        <FaBars />
                    </div>
                </div>
                <nav className="menu">
                    {menuItem.map((item, index) => (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className="link" 
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpen ? 'block' : 'none' }}>{item.name}</div>
                        </NavLink>
                    ))}
                </nav>
            </div>
            <main>
                <Routes>
                    <Route path="/" element={<Orders />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/stock" element={<Stock />} />
                    <Route path="/sections" element={<Sections />} />
                    <Route path="/supplier" element={<Supplier />} />
                    <Route path="/reports" element={<Reports />} />
                </Routes>
            </main>
        </div>
    );
};

export default Sidebar;
