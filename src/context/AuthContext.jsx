import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(() => {
        return localStorage.getItem('isAdmin') === 'true';
    });

    const login = (email, password) => {
        // Basic auth logic for demonstration
        if (email === 'admin@luxury.com' && password === 'admin123') {
            setIsAdmin(true);
            localStorage.setItem('isAdmin', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
