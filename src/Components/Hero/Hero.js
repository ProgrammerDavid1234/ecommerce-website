import React from 'react';
import styles from './Hero.module.css'; // Correct import for Hero styles
import Sidebar from '../Sidebar/Sidebar';
import apple from '../Assets/apple.png';
import sidenew from '../Assets/sidenew.png';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Sidebar />
      <div className={styles.heroContent}>
        <p className={styles.title}>
          <img src={apple} alt="Apple" />iPhone 14 Series
        </p>
        <br />
        <br />
        <h3 style={{fontSize:'50px', fontWeight:'bolder'}}>
          Up to <br /> 10% off Voucher
        </h3>
        <br />
        <p className={styles.shopNow}>
          Shop Now <img src={sidenew} style={{width:'20px'}} alt="Arrow" />
        </p>
      </div>
    </div>
  );
}

export default Hero;
