import React, { useState, useEffect } from 'react';
import './MainDashboard.css';
import Sidebar from '../../components-dashboard/Sidebar/Sidebar';
import Dashboard from '../../components-dashboard/Dashboard/Dashboard';
import Users from '../../components-dashboard/Users/Users';
import Calender from '../../components-dashboard/Calender/Calender';
import Events from '../../components-dashboard/Eventss/Events';
import Reports from '../../components-dashboard/Reports/Reports';
import Tasks from '../../components-dashboard/Tasks/Tasks';

const MainDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'calendar':
        return <Calender />;
      case 'events':
        return <Events />;
      case 'tasks':
        return <Tasks />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='main-dashboard'>
      <Sidebar onMenuClick={setActivePage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
};

export default MainDashboard;
