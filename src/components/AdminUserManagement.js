import React, { useState, useEffect } from 'react';
import '../admin.css';

// Basit bir kullanıcı listesi örneği
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: 3, name: 'Emma Brown', email: 'emma@example.com', role: 'user' }
];

const AdminUserManagement = () => {
  const [users, setUsers] = useState(initialUsers);

  // Kullanıcı silme fonksiyonu
  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Basit kullanıcı listesi gösterimi
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManagement;
