import React, { useState } from 'react';
import './EditEventModal.css';

function EditEventModal({ event, onClose, onSave }) {
  const [updatedEvent, setUpdatedEvent] = useState({ ...event });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedEvent);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Edit Event</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Event:
            <input type="text" name="event" value={updatedEvent.event} onChange={handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={updatedEvent.description} onChange={handleChange} />
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;
