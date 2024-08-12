import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css'; // Scoped CSS for Signup Component
import logo from '../images/logo.jpeg'; // Ensure this path is correct

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    nic: '',
    email: '',
    contactNumber: '',
    userName: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    console.log('Signup data:', formData);
    navigate('/login'); // Redirect to login page after signup
  };

  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo} alt="Logo" className="logo" />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nic"
          placeholder="NIC"
          value={formData.nic}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button onClick={handleSignUp} className="signup-btn">Sign Up</button>
        <p>Or</p>
        <button onClick={handleLogin} className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Signup;
