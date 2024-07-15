import React from 'react';
import styles from './Features.module.css';
import Rectangle from '../Assets/Rectangle.png';
import Feature1 from '../Assets/Features.png';

const Feature = () => {
  return (
    <div className='container'>
      <div className={styles.container} id='container'>
        <img src={Rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
        <p style={{ color: 'red', fontWeight: 'bold' }}>Featured</p>
      </div>
      <div className={styles.timerContainer}>
        <h3 style={{fontSize:''}}>New Arrival</h3>
      </div>
      <img src={Feature1} className={styles.categoryImage} alt="Feature" />
    </div>
  );
};

export default Feature;
