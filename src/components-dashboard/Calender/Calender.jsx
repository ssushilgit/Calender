import React, { useState, useEffect } from 'react';
import './Calender.css'; // Make sure you have the CSS file to style your component

const Calender = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }

  const daysInMonth = new Date(2024, 5, 0).getDate(); // Example for June 2024
  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const event = events.find(event => new Date(event.date).getDate() === i);
      days.push(
        <div key={i} className={`day ${event ? 'has-event' : ''}`}>
          <span>{i}</span>
          {event && <div className="event-indicator"></div>}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calender">
      <header className="calender-header">
        <h1>June 2024</h1>
      </header>
      <div className="calender-grid">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calender;
