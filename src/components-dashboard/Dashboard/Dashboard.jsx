import React from 'react';
import './Dashboard.css';
import user from '../../assets/user.jpg'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <div className="user-info">
          <img src={user} alt="User" className="user-image" />
          <div>
            <h1>Welcome, SuperAdmin</h1>
            <p>superadmin</p>
          </div>
        </div>
        <div className="task-status">
          <span className="task todo">
            <i className="fas fa-tasks"></i> Todo: 37
          </span>
          <span className="task in-progress">
            <i className="fas fa-spinner"></i> In progress: 34
          </span>
          <span className="task completed">
            <i className="fas fa-check-circle"></i> Completed: 34
          </span>
          <span className="task backlogs">
            <i className="fas fa-exclamation-circle"></i> Backlogs: 19
          </span>
        </div>
      </header>
      <section className="event-details">
        <h1>Event Details</h1>
        <div className="event-summary">
          <div className="total-events">
            <h2>Total Events</h2>
            <p>25</p>
          </div>
          <div className="events-this-month">
            <h2>Events This Month</h2>
            <p>0</p>
          </div>
          <div className="total-task">
            <h2>Total Task</h2>
            <p>27</p>
          </div>
        </div>
        <div className="charts">
          <div className="task-chart">
            {/* Insert your Pie chart component here */}
          </div>
          <div className="user-per-month">
            {/* Insert your Line chart component here */}
          </div>
        </div>
        <div className="number-of-events">
          {/* Insert your Bar chart component here */}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;


