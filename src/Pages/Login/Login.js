import React from 'react';
import styles from './Login.module.css';
import side from '../Assets/side.png';
import Google from '../Assets/Icon-Google.png';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <img src={side} alt="Side" className={styles.sideImage} />
      <div className={styles.formContainer}>
        <h3 className={styles.headerText}>Log in to your account</h3>
        <p className={styles.paragraphText}>Enter your credentials below</p>
        <input type="text" placeholder="Email or Phone Number" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <br />
        <button className="btn btn-danger" style={{ width: '100%' }}><a href='/landing' style={{color:'white', textDecoration:'none'}}>Login</a></button>
        <br />
        <button className={styles.googleButton} style={{ width: '100%' }}>
          <img src={Google} style={{ height: '30px', paddingRight: '20px' }} alt="Google" />
          Log in with Google
        </button>
        <p>Don't have an account? <a href="/join">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
