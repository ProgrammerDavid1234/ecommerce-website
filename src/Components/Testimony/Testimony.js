import React from 'react';
import styles from './Testimony.module.css';
import testimony from '../Assets/testimony.png';

const Testimony = () => {
  return (
    <div className={styles.container}>
      <img src={testimony} className={styles.testimonyImage} alt="Testimony" />
    </div>
  );
};

export default Testimony;
