import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const AgencyDashboard = () => {
  // Define state for managing profile editing and performance stats
  const [isEditing, setIsEditing] = useState(false);
  const [companyInfo] = useState({
    name: "Awesome Agency",
    email: "agency@example.com",
    phone: "123-456-7890",
    address: "1234 Business St, City, Country",
    website: "www.awesomeagency.com",
    type: "event planner",
    projectsManaged: 25,
    projectsCompleted: 20,
  });

  // Enable editing when Edit Profile is clicked
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section: Company Info */}
        <div className="card bg-gray-400 p-10 rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt="Admin"
              className="rounded-full border-4 border-primary p-1 w-28"
            />
            <div className="mt-4">
              <h4 className="text-xl font-bold">{companyInfo.name}</h4>
              <p className="text-secondary mb-1">{companyInfo.email}</p>
              <p className="text-muted text-sm">{companyInfo.address}</p>
              <button className="btn-primary px-4 py-2 mt-2">Follow</button>
              <button className="btn-outline-primary px-4 py-2 ml-2">
                Message
              </button>
            </div>
          </div>

          <hr className="my-4" />

          <ul className="list-none text-left">
            <li className="flex justify-between py-2">
              <span className="font-semibold">Website:</span>
              <span className="text-secondary">{companyInfo.website}</span>
            </li>
            <li className="flex justify-between py-2">
              <span className="font-semibold">Phone:</span>
              <span className="text-secondary">{companyInfo.phone}</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Edit Company Profile */}
        <div className="md:col-span-2 card bg-gray-200 opacity-70 p-10 rounded-lg shadow-lg">
          <div className="flex justify-between mb-4">
            <h5 className="text-lg font-bold">Company Profile</h5>
            <button
              className={`btn-edit ${isEditing ? "text-red-500" : "text-blue-500"}`}
              onClick={handleEditClick}
            >
              <FaEdit className="mr-2" />
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Profile form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                className={`form-input ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter company name"
                defaultValue={companyInfo.name}
                disabled={!isEditing}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className={`form-input ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter email"
                defaultValue={companyInfo.email}
                disabled={!isEditing}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                className={`form-input ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter phone"
                defaultValue={companyInfo.phone}
                disabled={!isEditing}
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                className={`form-input ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter address"
                defaultValue={companyInfo.address}
                disabled={!isEditing}
              />
            </div>

             {/* Type */}
             <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Type</label>
              <input
                type="text"
                className={`form-input ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter agency type"
                defaultValue={companyInfo.type}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Save Changes Button */}
          {isEditing && (
            <div className="flex justify-end mt-4">
              <button className="btn-primary px-4 py-2">Save Changes</button>
            </div>
          )}
        </div>

        {/* Bottom Section: Performance Overview */}
        <div className="md:col-span-3 card bg-gray-400 p-6 rounded-lg shadow-lg">
          <h5 className="text-lg font-bold mb-4">Company Performance</h5>

          {/* Projects Managed */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Projects Managed</label>
            <div className="bg-blue-600 text-white py-1 px-2 rounded">
              {companyInfo.projectsManaged}
            </div>
          </div>

          {/* Projects Completed */}
          <div>
            <label className="block text-sm font-semibold mb-1">Projects Completed</label>
            <div className="bg-green-500 text-white py-1 px-2 rounded">
              {companyInfo.projectsCompleted}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;
