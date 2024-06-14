import React, { useState } from 'react';
import './Reports.css';

const Reports = () => {
  const [activeReport, setActiveReport] = useState('events');

  const renderEventsReport = () => (
    <div className="container-report">
      <div className="header-report">
        <button className="button active" onClick={() => setActiveReport('events')}>Events Report</button>
        <button className="button" onClick={() => setActiveReport('tasks')}>Task Report</button>
      </div>
      <div className="content">
        <div className="stat-box">
          <div>Total Events</div>
          <div className="stat-box-number">25</div>
        </div>
        <div className="stat-box">
          <div>Events Next Month</div>
          <div className="stat-box-number">0</div>
        </div>
        <div className="stat-box">
          <div>Passed Events</div>
          <div className="stat-box-number">25</div>
        </div>
        <div className="stat-box">
          <div>Today's Events</div>
          <div className="stat-box-number">0</div>
        </div>
        <div className="stat-box">
          <div>Events This Month</div>
          <div className="stat-box-number">0</div>
        </div>
        <div className="stat-box">
          <div>Upcoming Events</div>
          <div className="stat-box-number">0</div>
        </div>
        <div className="event-box event-box-double">
          <div>Passed Events of 3 Months</div>
          <div>  New Year</div>
          <div className="date">2081-1-1</div>
        </div>
        <div className="event-box event-box-double">
          <div>Upcoming Events on 3 Months</div>
          <div>No upcoming events</div>
        </div>
        <div className="event-box">
          <div>Today's Events</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );

  const renderTaskReport = () => (
    <div className="container-report">
      <div className="header-report">
        <button className="button" onClick={() => setActiveReport('events')}>Events Report</button>
        <button className="button active" onClick={() => setActiveReport('tasks')}>Task Report</button>
      </div>
      <div className="content">
        <div className="stat-box">
          <div>Task on todo: 41</div>
        </div>
        <div className="stat-box">
          <div>Task on progress: 36</div>
        </div>
        <div className="stat-box">
          <div>Task completed: 38</div>
        </div>
        <div className="stat-box">
          <div>Task on backlogs: 19</div>
        </div>
        <div className="event-box event-box-double">
          <div>Task List</div>
          <div>Planning</div>
          <div>revenue</div>
          <div>Sifarish</div>
          <div>ERP (सिफारिश, दर्ता चलानी, आदि)</div>
          <div>योजना व्यवस्थापन प्रणाली</div>
          <div>PIS (व्यक्तिगत विवरण व्यवस्थापन प्रणाली)</div>
          <div>सिफारिस व्यवस्थापन प्रणाली</div>
        </div>
        <div className="pie-chart">
          <div>Task</div>
          <img src="path-to-pie-chart-image" alt="Pie Chart" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {activeReport === 'events' ? renderEventsReport() : renderTaskReport()}
    </div>
  );
};

export default Reports;
