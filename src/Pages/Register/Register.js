// Join.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import styles from './Join.module.css';
import side from '../Assets/side.png';
import Google from '../Assets/Icon-Google.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.emailOrPhone || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.error || 'Failed to create account');
      }
    } catch (err) {
      setError('Failed to create account');
    }
  };

  const handleGoogleSuccess = async (response) => {
    const idToken = response.credential; // Extract the ID token from the response
  
    try {
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken }),
      });
  
      const data = await res.json();
      if (res.ok) {
        console.log('User data:', data);
        navigate('/landing'); // Redirect or handle as needed
      } else {
        setError(data.error || 'Failed to authenticate with Google');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to authenticate with Google');
    }
  };

  const handleGoogleError = (error) => {
    console.error('Google login error:', error);
    setError('Failed to authenticate with Google');
  };

  return (
    <div className={styles.loginContainer}>
      <img src={side} alt="Side" className={styles.sideImage} />
      <div className={styles.formContainer}>
        <h3 className={styles.headerText}>Create an account</h3>
        <p className={styles.paragraphText}>Enter your details below</p>
        {error && <p className={styles.errorText}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={formData.emailOrPhone}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>
            Create Account
          </button>
        </form>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          // The GoogleLogin component should be rendered as follows:
          logo={<img src={Google} alt="Sign up with Google" className={styles.googleIcon} />}
        />
        <p className={styles.signUpText}>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Register;

