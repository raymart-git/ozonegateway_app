// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedUsername, setLoggedUsername] = useState('');
  const [loggedSitename, setLoggedSitename] = useState('');

  useEffect(() => {
    const loggedUserData = sessionStorage.getItem('loggedUser');
    const loggedUser = loggedUserData ? JSON.parse(loggedUserData) : null;
    setLoggedUsername(loggedUser ? loggedUser.username : '');
    setLoggedSitename(loggedUser ? loggedUser.sitename : '');
  }, []);

  const updateLoggedUsername = (newUsername) => {
    setLoggedUsername(newUsername);
  };

  const updateLoggedSitename = (newSitename) => {
    setLoggedSitename(newSitename);
  };

  return (
    <UserContext.Provider value={{ loggedUsername, setLoggedUsername: updateLoggedUsername, loggedSitename, setLoggedSitename: updateLoggedSitename }}>
      {children}
    </UserContext.Provider>
  );
};
