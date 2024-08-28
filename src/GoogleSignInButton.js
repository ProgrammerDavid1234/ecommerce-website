// src/components/GoogleSignInButton.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
  const navigate = useNavigate();

  const handleSuccess = (response) => {
    // Handle successful login here
    console.log('Google login success:', response);
    // Navigate to the landing page after successful login
    navigate('/landing');
  };

  const handleError = (error) => {
    console.error('Google login error:', error);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      logo="Google"
      buttonText="Sign in with Google"
    />
  );
};

export default GoogleSignInButton;
