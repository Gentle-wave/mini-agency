import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const loginHook = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);  // Save token in localStorage
    };

    const logoutHook = () => {
        setToken(null);
        localStorage.removeItem('token');  // Clear token from localStorage
    };

    return (
        <AuthContext.Provider value={{ token, loginHook, logoutHook }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
