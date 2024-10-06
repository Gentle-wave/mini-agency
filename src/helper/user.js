export const getAllAgencies = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/getAllAgencies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('Agencies fetched successfully:', data.data.agencies);
            return {
                success: true,
                agencies: data.data.agencies, // List of agencies
            };
        } else {
            // Handle errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

export const updateProfileForAdmin = async (userId, { fullName, email, address, phoneNumber, type }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/updateProfileByAdmin/${userId}`, {
            method: 'PATCH', // Assuming you're using PATCH for partial updates
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName,
                email,
                address,
                phoneNumber,
                type,
            }),
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('Profile updated successfully:', data.data.user);
            return {
                success: true,
                user: data.data.user, // Updated user data
            };
        } else {
            // Handle errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

export const toggleUserActiveStatus = async (userId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/toggleActive/${userId}`, {
            method: 'PATCH', // Assuming you're using PATCH for this action
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('User status updated successfully:', data.data);
            return {
                success: true,
                message: `User is now ${data.data.active ? 'active' : 'inactive'}.`,
                userId: data.data.userId,
                active: data.data.active, // Updated active status
            };
        } else {
            // Handle errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

export const createProject = async ({ projectName, agency }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/createProject`, {
            method: 'POST', // Assuming you're using POST for creating a new project
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ projectName, agency }),
        });

        const data = await response.json();

        if (response.status === 201) {
            // Handle success
            console.log('Project created successfully:', data.data.project);
            return {
                success: true,
                message: 'Project created successfully',
                project: data.data.project, // Newly created project data
            };
        } else {
            // Handle errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

export const updateProfileForAgencies = async (userId, { fullName, email, address, phoneNumber, password, website, type }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/updateProfile/${userId}`, {
            method: 'PATCH', // Assuming you're using PATCH to update the profile
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, address, phoneNumber, password, website, type }),
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('Profile updated successfully:', data.data.user);
            return {
                success: true,
                message: 'Profile updated successfully',
                user: data.data.user, // Updated user data
            };
        } else {
            // Handle errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
}

export const getAllProjects = async (userId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/getAllProjects/${userId}`, {
            method: 'GET', // Assuming you're using GET to retrieve the projects
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('Projects fetched successfully:', data.data.projects);
            return {
                success: true,
                projects: data.data.projects, // Retrieved projects data
            };
        } else if (response.status === 404) {
            // Handle case where no projects are found
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        } else {
            // Handle other errors from server response
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

export const updateProjectStatus = async (projectId) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/toggleProjectSatus/${projectId}`, {
            method: 'PUT', // Using PATCH for partial update
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok) {
            // Handle success
            console.log('Project status updated successfully:', data.message);
            return {
                success: true,
                isCompleted: data.isCompleted, // Get the updated completion status
                message: data.message,
            };
        } else {
            // Handle error response from the server
            console.error('Error:', data.message);
            return {
                success: false,
                message: data.message,
            };
        }
    } catch (error) {
        // Handle network or unexpected errors
        console.error('Error:', error.message);
        return {
            success: false,
            message: error.message,
        };
    }
};

