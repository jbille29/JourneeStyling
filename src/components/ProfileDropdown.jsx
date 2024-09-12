import React, { useState } from 'react';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './ProfileDropdown.css'; // Create the styles for the dropdown

const ProfileDropdown = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="profile-container">
      {/* User profile icon */}
      <FaUser 
        size={40}
        className="profile-icon" 
        onClick={toggleDropdown} 
        style={{
            cursor: 'pointer',
            transition: 'color 0.3s ease, transform 0.1s ease',
          }}
        />

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <button className="menu-item">
            <FaCog /> Settings
          </button>
          <button className="menu-item" onClick={onLogout}>
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
