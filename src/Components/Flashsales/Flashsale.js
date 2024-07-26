import React from 'react';
import styles from './Flashsale.module.css';
import Rectangle from '../Assets/Rectangle.png';
import timer from '../Assets/timer.png';
import left from '../Assets/left.png';
import right from '../Assets/right.png';

const Flashsale = () => {
  return (
    <div className='container'>
      <div className={styles.container} id='container'>
        <img src={Rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
        <p style={{ color: 'red', fontWeight: 'bold' }}>Today's</p>
      </div>
      <div className={styles.timerContainer}>
        <h3 style={{fontSize:''}}>Flash Sales</h3>
        <img src={timer} className={styles.timer} alt="Timer Icon" />
        <div className={styles.arrows}>
          <img src={left} alt='left icon' />
          <img src={right} alt='right icon' />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Flashsale;