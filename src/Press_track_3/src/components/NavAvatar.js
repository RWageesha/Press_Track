import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavAvatar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear any authentication data (if any) and redirect to the login page
    localStorage.removeItem('auth'); // Assuming you stored an auth token, adjust as needed
    navigate('/login'); // Redirect to the login page
  };

  return (
    <li className="nav-item dropdown pe-3">
      <a className="nav-link nav-profile d-flex align-items-center pe-0"
         href="/profile" 
         data-bs-toggle="dropdown">
        <img src="images/user.jpg" alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">F.David</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>David</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="/profile" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="/settings" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="/help" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button 
            className="dropdown-item d-flex align-items-center"
            onClick={handleSignOut}
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
