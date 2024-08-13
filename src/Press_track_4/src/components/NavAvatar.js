import React from 'react'
import './nav.css';

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        {/* Use a Bootstrap icon as the avatar */}
        <i className="bi bi-person-circle nav-icon"></i> {/* Use any Bootstrap icon */}
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
          <a
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <i className="bi bi-person"></i>
            <span className="ps-2">My Profile</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <i className="bi bi-gear"></i>
            <span className="ps-2">Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="pages-faq.html"
          >
            <i className="bi bi-question-circle"></i>
            <span className="ps-2">Need Help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="#"
          >
            <i className="bi bi-box-arrow-right"></i>
            <span className="ps-2">Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;