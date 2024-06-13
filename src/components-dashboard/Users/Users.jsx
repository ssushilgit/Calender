import React, { useState } from 'react';
import './Users.css';

const usersData = [
  { image: 'SK', name: 'Sandesh Karki', username: 'Sandesh Karki', role: 'User', createdDate: '2024-01-05' },
  { image: 'AB', name: 'Alish Baniya', username: 'Alish Baniya', role: 'User', createdDate: '2024-01-05' },
  { image: 'AS', name: 'Aakash Shrestha', username: 'Aakash Shrestha', role: 'User', createdDate: '2024-01-05' },
  { image: 'RS', name: 'Roshan Sunar', username: 'Roshan Ale', role: 'User', createdDate: '2024-01-14' },
  { image: 'A1', name: 'Aakash Luray', username: 'Aakash Shrestha', role: 'User', createdDate: '2024-01-18' },
  { image: 'AR', name: 'Aarav Rai', username: 'AaravR', role: 'User', createdDate: '2024-02-01' },
  { image: 'KN', name: 'Kiran Neupane', username: 'KiranN', role: 'User', createdDate: '2024-02-03' },
  { image: 'ML', name: 'Manish Lama', username: 'ManishL', role: 'User', createdDate: '2024-02-05' }
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const usersPerPage = 5;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleAddUserClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      image: formData.firstName.charAt(0) + formData.lastName.charAt(0),
      name: `${formData.firstName} ${formData.lastName}`,
      username: formData.username,
      role: 'User',
      createdDate: new Date().toISOString().split('T')[0]
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * usersPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="users-container">
      <header className="header-user">
        <h1>Users</h1>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedUsers.map((user, index) => (
              <tr key={index}>
                <td><div className="user-image">{user.image}</div></td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.createdDate}</td>
                <td><button className="delete-btn"><i className="fa-solid fa-trash"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-user">
          <button className="pagination-user-btn" onClick={handlePreviousClick} disabled={currentPage === 1}>❮</button>
          <span>{startIndex + 1}-{startIndex + selectedUsers.length} of {users.length}</span>
          <button className="pagination-user-btn" onClick={handleNextClick} disabled={currentPage === totalPages}>❯</button>
        </div>
      </div>
      <button className="add-user-btn" onClick={handleAddUserClick}>Add User</button>


      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="first name" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="second name" required />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="user name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="*****" required />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
