import React, { useEffect } from 'react';
import loginService from '../../service/api/login.service';

const SignOut = () => {

  useEffect(() => {
    const handleSignOut = () => {
      try {
        loginService.logout();
        window.location.href = "/#/auth/signin";
      } catch (error) {
        // Handle sign-out error
      }
    };

    handleSignOut();
  }, []);

  return null; // This component doesn't render anything
};

export default SignOut;
