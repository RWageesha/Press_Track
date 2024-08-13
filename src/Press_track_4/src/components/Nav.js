import React from 'react'
import NavAvatar from './NavAvatar';
import NavMessage from './NavMessage';
import NavNotice from './NavNotice';
import NavSettings from './NavSettings';
import './nav.css';


function Nav() {
  return (
    <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
    
    <NavNotice></NavNotice>
    <NavMessage></NavMessage>
   <NavSettings></NavSettings>
    <NavAvatar></NavAvatar>
    
   
    </ul>
    </nav>
  );
}

export default Nav