// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import side from '../Assets/side.png';
import Google from '../Assets/Icon-Google.png';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    emailOrPhone: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.emailOrPhone || !credentials.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        // Assuming the server responds with a token
        localStorage.setItem('token', data.token); // Store token in localStorage
        navigate('/landing');
      } else {
        setError(data.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <img src={side} alt="Side" className={styles.sideImage} />
      <div className={styles.formContainer}>
        <h3 className={styles.headerText}>Log in to your account</h3>
        <p className={styles.paragraphText}>Enter your credentials below</p>
        {error && <p className={styles.errorText}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone Number"
            value={credentials.emailOrPhone}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <button className={styles.googleButton}>
          <img src={Google} alt="Google" className={styles.googleIcon} />
          Log in with Google
        </button>
        <p className={styles.signUpText}>Don't have an account? <a href="/join">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
