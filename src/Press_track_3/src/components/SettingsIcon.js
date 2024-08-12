import React, { useState } from 'react';
import './settingsicon.css';

function SettingsIcon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <i className="bi bi-gear settings-icon" onClick={openModal}></i>

      {/* Modal */}
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

export default SettingsIcon;