import React from 'react'
import './logo.css';


function Logo() {
    const handleToggleSideBar= () =>{
        document.body.classList.toggle('toggle-sidebar');
    };

  return (
    <div className="d-flex align-items-center justify-content-between">
        <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={ handleToggleSideBar}
        ></i>
        <a href="/" className="logo d-flex align-items-center">
        
            <img src="/images/logo.jpeg" alt="logo"></img>
            
       
        </a>
        <h4>DashBoard</h4>
        </div>
  )
}

export default Logo;