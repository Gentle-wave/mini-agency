import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, isOpen, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState(user || {}); // Fallback to empty object if user is null

  useEffect(() => {
    if (user) {
      setEditedUser(user); // Update state when user prop changes
    }
  }, [user]);

  if (!isOpen) return null; // Don't render the modal if it's not open

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose(); // Close modal after saving
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold text-white mb-4">Edit User</h2>
        
        {/* Conditionally render fields if user is loaded */}
        {user ? (
          <>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={editedUser.name || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={editedUser.email || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Phone</label>
              <input
                type="text"
                name="phone"
                value={editedUser.phone || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Address</label>
              <input
                type="text"
                name="address"
                value={editedUser.address || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              />
            </div>

            {/* Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300">Type</label>
              <input
                type="text"
                name="type"
                value={editedUser.type || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-600 rounded-md p-2 bg-gray-700 text-white"
              />
            </div>
          </>
        ) : (
          <p className="text-gray-400">Loading user data...</p>
        )}

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
