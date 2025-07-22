// AuthProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/lacalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);

  // Refresh data function
  const refreshData = () => {
    const {employees, admin} = getLocalStorage();
    setUserData({ employees, admin });
  };

  // Initialize data
  useEffect(() => {
    setLocalStorage(); // Ensure data exists
    refreshData();
  }, []);

  return (
    <AuthContext.Provider value={{ ...userData, refreshData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;