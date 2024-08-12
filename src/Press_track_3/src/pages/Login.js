import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; 
import logo from '../images/logo.jpeg'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    if (email === 'user@gmail.com' && password === 'user1') {
      localStorage.setItem('auth', 'true'); 
      navigate('/Home'); 
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="logo" />
        <input
          type="text"
          placeholder="User Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="#forgot-password" className="forgot-password">Forgot your password?</a>
        <button onClick={handleLogin} className="login-btn">Log in</button>
        <p>Or</p>
        <button onClick={handleSignUp} className="signup-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
