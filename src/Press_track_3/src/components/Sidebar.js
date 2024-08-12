import React from 'react';
import {
    FaFileAlt,
    FaBox,
    FaRegListAlt,
    FaTruck,
    FaChartBar,
    FaUsers, 
    FaHome 
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    const menuItem = [
        { path: '/Home', name: 'Home', icon: <FaHome /> }, 
        { path: '/orders', name: 'Orders', icon: <FaFileAlt /> },
        { path: '/stock', name: 'Stock', icon: <FaBox /> },
        { path: '/sections', name: 'Sections', icon: <FaRegListAlt /> },
        { path: '/supplier', name: 'Supplier', icon: <FaTruck /> },
        { path: '/reports', name: 'Reports', icon: <FaChartBar /> },
        { path: '/customers', name: 'Customers', icon: <FaUsers /> } // Adding the Customers button
    ];

    return (
        <div className="sidebar">
            <nav className="menu">
                {menuItem.map((item, index) => (
                    <NavLink 
                        to={item.path} 
                        key={index} 
                        className={({ isActive }) => isActive ? "link active" : "link"}
                    >
                        <div className="icon">{item.icon}</div>
                        <div className="link_text">{item.name}</div>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
