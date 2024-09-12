import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';  // For the "X" icon
import './AddJournal.css';  // Assuming we're using a similar styling theme

const AddJournal = ({ onClose, onSubmit }) => {
  const [journalName, setJournalName] = useState('');
  const [journalDescription, setJournalDescription] = useState('');

  const handleSubmit = () => {
    // Perform validation if necessary
    if (journalName.trim() === '' || journalDescription.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    onSubmit({ name: journalName, description: journalDescription });
    onClose();  // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Journal</h2>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>
        <div className="modal-body">
          <div className="form-control">
            <label htmlFor="journalName" className="form-label">Journal Name</label>
            <input
              type="text"
              id="journalName"
              className="form-input"
              value={journalName}
              onChange={(e) => setJournalName(e.target.value)}
              placeholder="Enter journal name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="journalDescription" className="form-label">Journal Description</label>
            <textarea
              id="journalDescription"
              className="form-input journal-textarea"
              value={journalDescription}
              onChange={(e) => setJournalDescription(e.target.value)}
              placeholder="Describe your journal"
              rows="6"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="create-btn primary-btn" onClick={handleSubmit}>
            Create Journal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJournal;
