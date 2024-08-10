import React from 'react';
import '../css/Profile.css'; // Ensure this CSS file exists

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-section">
          <img src="images/pr.jpg" alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h3>Mr. Hassan Magdy</h3>
            <p>Manager</p>
            <p>Tel: 369 258 147</p>
            <p>Email: h@procrew.pro</p>
          </div>
        </div>
        <div className="profile-actions">
          <div className="input-group">
            <label>User ID</label>
            <input type="text" value="M001" readOnly />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value="********" readOnly />
          </div>
          <button className="btn btn-primary">Change User ID or Password</button>
          <button className="btn btn-secondary">Create a New Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
