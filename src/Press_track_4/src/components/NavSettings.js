import React, { useState } from 'react';
import './nav.css'; 

function NavSettings() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div  class="nav-icon-container" >
    
      <i className="bi bi-gear nav-settings-icon" onClick={openModal}></i>

    
      {isModalOpen && (
        <div className="settings-modal">
          <div className="settings-modal-content">
            <h2>Settings</h2>
            <p>Here you can adjust your settings...</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default NavSettings;

