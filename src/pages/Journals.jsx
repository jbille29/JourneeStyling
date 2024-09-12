import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'; // Feather icons user icon

import JournalCard from '../components/JournalCard';
import AddJournal from '../components/AddJournal';
import './Journals.css';

const Journals = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numJournals = 12;
  const journalArray = Array.from({ length: numJournals }, (_, index) => (
    <JournalCard key={index} number={index + 1} />
  ));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false); // Reset active state on mouse leave
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  const handleAddJournal = (journalData) => {
    // Handle creating a new journal here
    alert('Journal Created!');
  };


  return (
    <div className='journals-container'>
      <nav className='journals-navbar'>
        <div className='journals-navbar-row-one'>
          <button 
            className='primary-btn'
            onClick={openModal}
          >
            Add Journal
          </button>
          <h2 className='journals-navbar-header'>My Journals</h2>
          <FiUser
            size={40}
            color={isHovered ? (isActive ? '#1E88E5' : '#42A5F5') : '#4FC3F7'}
            style={{
              cursor: 'pointer',
              transition: 'color 0.3s ease, transform 0.1s ease',
              transform: isActive ? 'scale(0.95)' : 'scale(1)',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          />
        </div>
        <input
          className='journals-navbar-search'
          type='text'
          placeholder='Search journals...'
        />
      </nav>

      <main className='journals-grid'>
        {journalArray}
      </main>

      {isModalOpen && (
        <AddJournal
          onClose={closeModal}
          onSubmit={handleAddJournal}
        />
      )}
    </div>
  );
};

export default Journals;
