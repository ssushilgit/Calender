import React from 'react';
import './Dashboard.css';
import user from '../../assets/user.jpg'
import PieChartComponent from "../Chart/PieChartComponent";
import LineChartComponent from '../Chart/LineChartComponent';
import BarGraphComponent from '../Chart/BarGraphComponent';

const  Dashboard = () => {
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
          <h3>Tasks</h3>
            <PieChartComponent/>
          </div>
          <div className="user-per-month">
          <h3>Users Per Month</h3>
            <LineChartComponent/>
          </div>
        </div>
        <div className="number-of-events">
        <h3>Number of Events</h3>
        <p>Details about number of events per month</p>
        <BarGraphComponent/>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;


