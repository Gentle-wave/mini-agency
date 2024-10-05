import React, { useState } from 'react';
import { FaEdit, FaTasks } from 'react-icons/fa';
import adminImage from './assets/pexels-hannah-nelson-390257-1065084.jpg';
import fallbackUserImage from '../src/assets/pexels-stefanstefancik-91227.jpg';
import AssignProjectModal from './AssignProjectModal'; // Import for project assignment modal
import EditUserModal from './editmodal';

const Dashboard = ({ adminName }) => {
  const [userData, setUserData] = useState(users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);

  const toggleStatus = (id) => {
    const updatedUsers = userData.map((user) =>
      user.id === id
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    );
    setUserData(updatedUsers);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true); // Open the modal when edit is clicked
  };

  // Handle project assignment
  const handleAssignProject = (user) => {
    console.log('Assign Project Triggered:', user); // Logging the selected user for debugging
    setSelectedUser(user);
    setProjectModalOpen(true); // Open the project assignment modal
  };

  const handleSave = (editedUser) => {
    const updatedUsers = userData.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUserData(updatedUsers);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when cancel or save is clicked
  };

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-white">Welcome, {adminName}</h2>
        <div className="flex items-center space-x-3">
          <span className="text-white">Hello, {adminName}</span>
          <img src={adminImage} alt="Admin" className="h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* Dashboard Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="p-6 bg-gray-800 rounded-lg shadow-md text-center">
            <h3 className={`text-white text-3xl font-normal`}>{stat.value}</h3>
            <p className="text-gray-400">{stat.title}</p>
            <p className="text-sm text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Customer/User Table */}
      <div className="overflow-x-auto bg-gray-800 p-5 rounded-lg shadow-lg">
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Billing Address</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} className="border-t border-gray-700">
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img
                      src={user.image ? user.image : fallbackUserImage}
                      alt={user.name}
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    {user.name}
                  </div>
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2">{user.address}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className={`px-3 py-1 rounded ${user.status === 'active'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700'
                      } text-white`}
                  >
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="px-4 py-6">
                  <div className="flex space-x-6"> {/* Flexbox to align icons side by side */}
                    <FaEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      onClick={() => handleEdit(user)}
                    />
                    <FaTasks
                      className="text-yellow-500 cursor-pointer hover:text-yellow-700"
                      onClick={() => handleAssignProject(user)} // Assign project action
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for editing user details */}
      <EditUserModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
      />
      {isProjectModalOpen && (
        <AssignProjectModal
          user={selectedUser} // Pass selected user to the project modal
          onClose={() => setProjectModalOpen(false)} // Close modal function
        />
      )}
    </div>
  );
};

export default Dashboard;


// Dummy Data
const users = [
  {
    id: 1,
    name: 'Alex Xavier',
    email: 'alex@example.com',
    phone: '(555) 123-4567',
    address: '123 Elm Street, Springfield, IL',
    totalSpent: '$981.00',
    status: 'active',
    image: '/src/assets/pexels-creationhill-1681010.jpg',
  },
  {
    id: 2,
    name: 'Brian Edwards',
    email: 'brian@example.com',
    phone: '(555) 234-5678',
    address: '456 Oak Street, Lincoln, NE',
    totalSpent: '$199.00',
    status: 'inactive',
    image: './assets/pexels-hannah-nelson-390257-1065084.jpg',
  },
  {
    id: 3,
    name: 'Chloe Anderson',
    email: 'chloe@example.com',
    phone: '(555) 345-6789',
    address: '789 Pine Street, Miami, FL',
    totalSpent: '$453.50',
    status: 'active',
    image: './assets/pexels-justin-shaifer-501272-1222271.jpg',
  },
  {
    id: 4,
    name: 'Diana Lee',
    email: 'diana@example.com',
    phone: '(555) 456-7890',
    address: '101 Maple Avenue, Denver, CO',
    totalSpent: '$725.00',
    status: 'inactive',
    image: './assets/pexels-stefanstefancik-91227.jpg',
  }
];

const stats = [
  {
    title: 'Total Agencies',
    value: '15',
    change: '+10% from yesterday',
    color: 'orange-500',
  },
  {
    title: 'Total Active Agencies',
    value: '12',
    change: '+8% from yesterday',
    color: 'green-500',
  },
  {
    title: 'Total projects',
    value: '10',
    change: '+2% from yesterday',
    color: 'purple-500',
  },
  {
    title: 'Projects Completed',
    value: '5',
    change: '+3% from yesterday',
    color: 'blue-500',
  },
];
