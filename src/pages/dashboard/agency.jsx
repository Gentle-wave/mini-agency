import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { getAllProjects, updateProfileForAgencies, updateProjectStatus } from "../../helper/user";
import { useNavigate } from "react-router-dom";

const AgencyDashboard = ({ userInfo }) => {
  const navigate = useNavigate()
  const { active, address, email, fullName, phoneNumber, website, role, type, userId, totalProjects, completedProjects } = userInfo;
  const [isEditing, setIsEditing] = useState(false);
  const [showProjects, setShowProjects] = useState(false); // State for toggling project visibility
  const [projects, setProjects] = useState([]);
  const projectLoaded = useRef('false')

  const handleFetchProjects = async () => {
    projectLoaded.current = 'true'
    const result = await getAllProjects(userId);

    if (result.success) {
      // Handle success, show the fetched projects
      setProjects(result.projects)
      // console.log('Fetched projects:', result.projects);
    } else {
      // Handle error (e.g., show an error message)
      alert('Failed to fetch projects:', result.message);
    }
  };

  useEffect(() => {
    if (projectLoaded.current === 'false') {
      handleFetchProjects()
    }
  }, [])


  const [companyInfo, setCompanyInfo] = useState({
    name: fullName || "Your name",
    email: email,
    phone: phoneNumber || "+123 ... ...",
    address: address || "1234 Business St, City, Country",
    website: website || "www.example_agency.com",
    type: type || "Your Agency industry",
    projectsManaged: totalProjects,
    projectsCompleted: completedProjects,
  });

  // Enable editing when Edit Profile is clicked
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  const handleSave = async () => {
    if (companyInfo.name === fullName && companyInfo.email === email && companyInfo.phone === phoneNumber && companyInfo.address === address && companyInfo.website === website && companyInfo.type === type) {
      return setIsEditing(!isEditing);
    }
    const result = await updateProfileForAgencies(userId, { fullName: companyInfo.name, email: companyInfo.email, phoneNumber: companyInfo.phone, address: companyInfo.address, website: companyInfo.website, type: companyInfo.type });

    if (result.success) {
      alert('Agency Profile updated!');
      navigate(0)
      setIsEditing(!isEditing);
    } else {
      alert('Failed to update profile:', result.message);
    }
  }

  // Toggle project completion status
  const toggleProjectCompletion = async (projectId) => {
    const result = await updateProjectStatus(projectId);

    if (result.success) {
      const updatedProjects = projects.map((project) =>
        project.projectId === projectId ? {...project, completed: result.isCompleted } : project
      );
      setProjects(updatedProjects);
    } else {
      // Handle error (e.g., show an error message)
      alert('Failed to update project status:', result.message);
    }

  };

  // Toggle visibility of project list
  const handleShowProjectsClick = () => {
    setShowProjects(!showProjects);
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
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                className={`form-input w-full break-words ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter company name"
                defaultValue={companyInfo.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ wordBreak: "break-word" }}
              />
            </div>

            {/* Email */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className={`form-input w-full ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter email"
                onChange={handleInputChange}
                defaultValue={companyInfo.email}
                disabled={!isEditing}
              />
            </div>

            {/* Phone */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                className={`form-input w-full ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter phone"
                onChange={handleInputChange}
                defaultValue={companyInfo.phone}
                disabled={!isEditing}
              />
            </div>

            {/* Address */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                className={`form-input w-full break-words ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter address"
                defaultValue={companyInfo.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ wordBreak: "break-word" }}
              />
            </div>

            {/* Type */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Type</label>
              <input
                type="text"
                name="type"
                className={`form-input w-full ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter agency type"
                onChange={handleInputChange}
                defaultValue={companyInfo.type}
                disabled={!isEditing}
              />
            </div>

            {/* Website */}
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Website</label>
              <input
                type="text"
                name="website"
                className={`form-input w-full ${isEditing ? "active" : "inactive"}`}
                placeholder="Enter your agency website"
                onChange={handleInputChange}
                defaultValue={companyInfo.website}
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Save Changes Button */}
          {isEditing && (
            <div className="flex justify-end mt-4">
              <button onClick={handleSave} className="btn-primary px-4 py-2">Save Changes</button>
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
            <button
              className="btn-primary mt-2"
              onClick={handleShowProjectsClick}
            >
              {showProjects ? "Hide All" : "See All"}
            </button>

            {/* Dropdown of projects */}
            {showProjects && (
              <div className="mt-4 bg-gray-200 p-4 rounded">
                {projects.map((project, index) => (
                  <div key={project.projectId} className="flex justify-between items-center py-2">
                    <span>{project.projectName}</span>
                    <span
                      className={`cursor-pointer ${project.completed ? "text-green-500" : "text-red-500"
                        }`}
                      onClick={() => toggleProjectCompletion(project.projectId)}
                    >
                      {project.completed ? "Completed" : "Not Completed"}
                    </span>
                  </div>
                ))}
              </div>
            )}
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

