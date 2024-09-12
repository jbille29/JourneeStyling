import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi'; // Feather icons user icon

import JournalCard from '../components/JournalCard';
import AddJournal from '../components/AddJournal';
import ProfileDropdown from '../components/ProfileDropdown';

import './Journals.css';

const Journals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numJournals = 12;
  const journalArray = Array.from({ length: numJournals }, (_, index) => (
    <JournalCard key={index} number={index + 1} />
  ));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddJournal = (journalData) => {
    // Handle creating a new journal here
    alert('Journal Created!');
  };

  const handleLogout = () => {
    alert('User logged out')
  }


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
          <ProfileDropdown onLogout={handleLogout} />
        
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
