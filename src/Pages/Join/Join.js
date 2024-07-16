import React from 'react';
import styles from './Join.module.css';
import side from '../Assets/side.png';

const Join = () => {
  return (
    <div className={styles.joinContainer}>
      <img src={side} alt="Side" className={styles.sideImage} />
      <div className={styles.formContainer}>
        <h3 className={styles.headerText} style={{paddingRight:'50px', marginRight:'50px', color:'red'}}>Create an account</h3>
        <p className={styles.paragraphText}>Enter your details below</p>
        <input type="text" placeholder="Name" className={styles.inputField} />
        <input type="text" placeholder="Email or Phone Number" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button className="btn btn-danger" style={{ width: '100%' }}>Create Account</button>
        <button className={styles.googleButton} style={{ width: '100%' }}>Sign up with Google</button>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Join;
