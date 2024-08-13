import React, { useState } from 'react';
import {
    FaFileAlt,
    FaBars,
    FaBox,
    FaRegListAlt,
    FaTruck,
    FaChartBar,
    FaTachometerAlt,
    FaUser
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation(); // To get the current path

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        { path: '/dashboard', name: 'Dashboard', icon: <FaTachometerAlt /> },
        { path: '/orders', name: 'Orders', icon: <FaFileAlt /> },
        { path: '/stock', name: 'Stock', icon: <FaBox /> },
        { path: '/sections', name: 'Sections', icon: <FaRegListAlt /> },
        { path: '/supplier', name: 'Supplier', icon: <FaTruck /> },
        { path: '/reports', name: 'Reports', icon: <FaChartBar /> },
        { path: '/customer', name: 'Customer', icon: <FaUser /> } ,
    ];

    return (
        <div className={`sidebar-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar">
                <div className="top_section">
                    <h1 className="logo" style={{ display: isOpen ? 'block' : 'none' }}>Logo</h1>
                    <div className="bars" onClick={toggle}>
                        <FaBars />
                    </div>
                </div>
                <nav className="menu">
                    {menuItem.map((item, index) => (
                        <button 
                            key={index} 
                            className={`menu-button ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                            onClick={() => navigate(item.path)}
                        >
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpen ? 'block' : 'none' }}>{item.name}</div>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
;
