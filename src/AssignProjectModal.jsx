import React, { useState } from 'react';
import { createProject } from './helper/user';

const AssignProjectModal = ({ user, onClose, onSave }) => {
  const [projectName, setProjectName] = useState('');

  const handleAssign = async () => {
    if (projectName) {
      const result = await createProject({projectName, agency:user.userId});

      if (result.success) {
        onSave()
        onClose(); // Close modal after assignment

      } else {
        alert('Failed to create project:', result.message);
      }

    } else {
      alert('Please enter a project name');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl text-white mb-4">Assign a Project</h2>
        <p className="text-gray-400 mb-4">Assign a project to {user.fullName}</p>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Please enter the project name"
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Discard
          </button>
          <button
            onClick={handleAssign}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignProjectModal;
