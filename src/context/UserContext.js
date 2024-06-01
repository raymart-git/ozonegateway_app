// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedUserName, setLoggedUsername] = useState('');

  useEffect(() => {
    const loggedUserData = sessionStorage.getItem('loggedUser');
    const loggedUser = loggedUserData ? JSON.parse(loggedUserData) : null;
    setLoggedUsername(loggedUser ? loggedUser.username : '');
  }, []);

  const updateLoggedUsername = (newUsername) => {
    setLoggedUsername(newUsername);
  };

  return (
    <UserContext.Provider value={{ loggedUserName, setLoggedUsername: updateLoggedUsername }}>
      {children}
    </UserContext.Provider>
  );
};
