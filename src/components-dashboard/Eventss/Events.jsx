import React, { useState } from 'react';
import EventRow from '../../components-dashboard/EventRow/EventRow';
import './Events.css';
import EditEventModal from '../../components-dashboard/EditEventModal/EditEventModal';


const eventsData = [
  { id: 1, date: '2080-6-1', event: 'dash 23', description: 'dashain 32', time: '8:11 AM' },
  { id: 2, date: '2080-6-26', event: 'tihar holiday', description: 'tihar celebrati', time: '10:13 AM' },
  { id: 3, date: '2080-7-3', event: 'kukur tihar', description: 'giving foods to', time: '9:13 AM' },
  { id: 4, date: '2080-7-24', event: 'testing', description: 'testing', time: '9:14 AM' },
  { id: 5, date: '2080-8-1', event: 'Samjhauta', description: 'Samjhauta worki', time: '1:45 PM' },
  { id: 6, date: '2080-8-7', event: 'hello', description: 'hey', time: '11:47 AM' },
  // Add more events as needed
];

const months = ['All Events', 'बैशाख', 'जेठ', 'असार', 'श्रावण', 'भदौ', 'आश्विन', 'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'];

function EventsList() {
  const [selectedMonth, setSelectedMonth] = useState('All Events');
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState(eventsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const eventsPerPage = 5;
  const filteredEvents = selectedMonth === 'All Events' ? events : events.filter(event => event.date.includes(selectedMonth));
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleEditClick = (event) => {
    setCurrentEvent(event);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setCurrentEvent(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    handleModalClose();
  };

  return (
    <div className="events-list">
      <header className="header-event">
        <h1>Events List</h1>
      </header>
      <div className="filter-container">
        <label htmlFor="month-filter">Filtered events by: </label>
        <select id="month-filter" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {months.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Nepali Date</th>
              <th>Event</th>
              <th>Description</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEvents.map((event, index) => (
              <EventRow key={event.id} event={event} index={indexOfFirstEvent + index + 1} onEditClick={handleEditClick} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-event">
        <button onClick={handleBack} disabled={currentPage === 1}>Back</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
      {modalOpen && <EditEventModal event={currentEvent} onClose={handleModalClose} onSave={handleEventUpdate} />}
    </div>
  );
}

export default EventsList;


