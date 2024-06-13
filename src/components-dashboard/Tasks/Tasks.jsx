// src/Tasks.jsx
import React from 'react';
import './Tasks.css';

const tasks = [
  {
    id: 1,
    title: 'Calender',
    description: 'Testing'
  },

  {
    id: 2,
    title: 'Hariyali Software',
    description: 'Software For Hariyali Aabiyan'
  },
  {
    id: 3,
    title: 'TAAN',
    description: 'Software For TAAN'
  },
  // Add more tasks as needed
];

const Tasks = () => {
  return (
    <div className="tasks-container">
      <header className="header-task">
        <h1>Tasks</h1>
        <div className="header-buttons">
          <button className="create-task">Create Task</button>
          <button className="search-task">Search Task</button>
        </div>
      </header>
      <div className="task-filters">
        <button className="active">Active Task</button>
        <button>Completed Task</button>
        <button>All Task</button>
        <button>Assigned Task</button>
      </div>
      <div className="task-cards">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <div className="task-actions">
              <button className="task-complete"><i className="fa-solid fa-check"></i></button>
              <button className="task-edit"><i className="fa-solid fa-pen-to-square"></i></button>
              <button className="task-delete"><i className="fa-solid fa-trash"></i></button>
            </div>
            <button className="manage-task">Manage Task</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span>1–{tasks.length} of {tasks.length}</span>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Tasks;
