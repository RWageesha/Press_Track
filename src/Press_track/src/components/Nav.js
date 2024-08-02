import React from 'react'
import NavAvatar from './NavAvatar';
import NavMessage from './NavMessage';
import NavNotice from './NavNotice';
import './nav.css';
import SettingsIcon from './SettingsIcon';


function Nav() {
  return (
    <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
    
    <NavNotice></NavNotice>
    <NavMessage></NavMessage>
    <SettingsIcon></SettingsIcon>
    <NavAvatar></NavAvatar>
    
   
    </ul>
    </nav>
  );
}

export default Nav