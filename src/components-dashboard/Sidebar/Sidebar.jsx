import React from 'react';
import './Sidebar.css';
import user from '../../assets/user.jpg';

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Softech</h2>
        <hr />
        <div className="user-profile">
          <img src={user} alt="User Profile" className="user-img" />
          <div className="user-infos">
            <p className="user-role">SuperAdmin</p>
            <p className="user-name">superadmin</p>
          </div>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => onMenuClick('dashboard')}><a href="#dashboard"><i className="fas fa-home"></i> Dashboard</a></li>
        <li onClick={() => onMenuClick('users')}><a href="#users"><i className="fas fa-users"></i> Users</a></li>
        <li onClick={() => onMenuClick('calendar')}><a href="#calendar"><i className="fas fa-calendar"></i> Calendar</a></li>
        <li onClick={() => onMenuClick('events')}><a href="#events"><i className="fas fa-calendar-alt"></i> Events</a></li>
        <li onClick={() => onMenuClick('tasks')}><a href="#tasks"><i className="fas fa-tasks"></i> Tasks</a></li>
        <li onClick={() => onMenuClick('reports')}><a href="#reports"><i className="fas fa-file-alt"></i> Reports</a></li>
      </ul>
      <div className="logout">
        <a href="#logout"><i className="icon icon-logout"></i> Log Out</a>
      </div>
    </div>
  );
};

export default Sidebar;
