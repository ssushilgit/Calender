import React, { useState } from 'react';
import './Tasks.css';

const tasksData = [
  {
    id: 1,
    title: 'Calendar',
    description: 'Testing',
    status: 'To Do'
  },
  {
    id: 2,
    title: 'Hariyali Software',
    description: 'Software For Hariyali Aabiyan',
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'TAAN',
    description: 'Software For TAAN',
    status: 'Completed'
  },
  // Add more tasks as needed
];

const Tasks = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isManageModalOpen, setManageModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('To Do');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [filteredStatus, setFilteredStatus] = useState('To Do'); // State for filtering tasks

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  const openManageModal = () => {
    setManageModalOpen(true);
    setFilteredStatus('All'); // Show all tasks in Manage Task modal
  };

  const closeManageModal = () => setManageModalOpen(false);

  const handleCreateChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: formData.title,
      description: formData.description,
      status: 'To Do'
    };
    setTasks([...tasks, newTask]);
    setFormData({ title: '', description: '' });
    setCreateModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    closeSearchModal();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddTaskClick = () => {
    closeManageModal(); // Close the Manage Task modal
    openCreateModal(); // Open the Create Task modal
  };

  // Filter tasks based on status
  const filteredTasks = tasks.filter((task) =>
    filteredStatus === 'All' ? true : task.status === filteredStatus
  );

  return (
    <div className="tasks-container">
      <header className="header-task">
        <h1>Tasks</h1>
        <div className="header-buttons">
          <button className="create-task" onClick={openCreateModal}>Create Task</button>
          <button className="search-task" onClick={openSearchModal}>Search Task</button>
        </div>
      </header>
      <div className="task-filters">
        <button
          className={filteredStatus === 'To Do' ? 'active' : ''}
          onClick={() => setFilteredStatus('To Do')}
        >
          Active Task
        </button>
        <button
          className={filteredStatus === 'In Progress' ? 'active' : ''}
          onClick={() => setFilteredStatus('In Progress')}
        >
          In Progress Task
        </button>
        <button
          className={filteredStatus === 'Completed' ? 'active' : ''}
          onClick={() => setFilteredStatus('Completed')}
        >
          Completed Task
        </button>
        <button
          className={filteredStatus === 'All' ? 'active' : ''}
          onClick={() => setFilteredStatus('All')}
        >
          All Task
        </button>
      </div>
      <div className="task-cards">
        {filteredTasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <div className="task-actions">
              <button className="task-complete"><i className="fa-solid fa-check"></i></button>
              <button className="task-edit"><i className="fa-solid fa-pen-to-square"></i></button>
              <button className="task-delete"><i className="fa-solid fa-trash"></i></button>
            </div>
            <button className="manage-task" onClick={openManageModal}>Manage Task</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button>Previous</button>
        <span>1–{tasks.length} of {tasks.length}</span>
        <button>Next</button>
      </div>

      {/* Modals */}
      {isCreateModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Create Task</h2>
            <form onSubmit={handleCreateSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleCreateChange} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleCreateChange} required></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={closeCreateModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSearchModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Search Task</h2>
            <form onSubmit={handleSearchSubmit}>
              <div className="form-group">
                <label>Search</label>
                <input type="text" value={searchTerm} onChange={handleSearchChange} required />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Search</button>
                <button type="button" className="cancel-btn" onClick={closeSearchModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isManageModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Manage Task</h2>
            <div className="tabs">
              <button
                className={activeTab === 'To Do' ? 'active' : ''}
                onClick={() => handleTabClick('To Do')}
              >
                To Do
              </button>
              <button
                className={activeTab === 'In Progress' ? 'active' : ''}
                onClick={() => handleTabClick('In Progress')}
              >
                In Progress
              </button>
              <button
                className={activeTab === 'Completed' ? 'active' : ''}
                onClick={() => handleTabClick('Completed')}
              >
                Completed
              </button>
            </div>
            <div className="tab-content">
              {filteredTasks.map((task) => (
                <div className="task-card" key={task.id}>
                  <h3>{task.title}</h3>
                  <p>Description: {task.description}</p>
                </div>
              ))}
            </div>
            {activeTab === 'To Do' && (
              <button className="add-task-btn" onClick={handleAddTaskClick}>Add Task</button>
            )}
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={closeManageModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
