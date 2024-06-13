import React from 'react';
import './EventRow.css';

function EventRow({ event, index, onEditClick }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{event.date}</td>
      <td>{event.event}</td>
      <td>{event.description}</td>
      <td>{event.time}</td>
      <td className="actions">
        <button className="edit-btn" onClick={() => onEditClick(event)}><i className="fa-regular fa-pen-to-square"></i></button>
        <button className="delete-btn"><i className="fa-solid fa-trash"></i></button>
        <button className="email-btn"><i className="fa-solid fa-envelope"></i></button>
      </td>
    </tr>
  );
}

export default EventRow;
