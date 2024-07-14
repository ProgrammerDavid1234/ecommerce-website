import React from 'react';
import styles from './Top.module.css';
import Vector from '../Assets/Vector.png'

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles['left-content']}>
        <p className={styles['center-text']}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><a href='#'>Shop Now</a></span>
        </p>
      </div>
      <div className={styles['right-content']}>
        <p>English</p>
        <img src={Vector} className={styles.image} alt="Language Selector" />
      </div>
    </div>
  );
}

export default Top;
