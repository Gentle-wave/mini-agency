

export const signup = async ({ email, password, confirmPassword, role }) => {
    console.log('url; ', process.env.REACT_APP_BASEURL)
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                confirmPassword,
                role,
            }),
        });

        const data = await response.json();

        if (response.status === 201) {
            // Handle success
            console.log('Signup successful:', data.message);
            return {
                success: true,
                message: data.message,
            };
        } else {
            // Handle validation errors
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

// `${process.env.REACT_APP_BASEURL}/api/v1/login`

export const login = async ({ email, password }) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('Login successful:', data.token);
            return {
                success: true,
                token: data.token,  // You can store this token in localStorage or cookies
            };
        } else {
            // Handle error from server response
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

export const getDashboardProfile = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/authorization`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Pass token in Authorization header
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            // Handle success
            console.log('User profile fetched successfully:', data.data);
            return {
                success: true,
                user: data.data, // User profile data
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