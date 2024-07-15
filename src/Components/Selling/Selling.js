import React from 'react';
import styles from './Selling.module.css';
import Rectangle from '../Assets/Rectangle.png';
import product from '../Assets/product.png';

const Selling = () => {
  return (
    <div>
      <div className='container'>
      <div className='container'>
                <div className={styles.container} id='container'>
                    <img src={Rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
                    <p style={{ color: 'red', fontWeight: 'bold' }}>Categories</p>
                </div>
                <div className={styles.timerContainer}>
                    <h3 style={{ fontSize: '' }}>Browse By Category</h3>
                    <div className={styles.arrows}>
                        <div className='btn btn-danger'>
                            View More
                        </div>
                    </div>
                </div>
                <br />
          <img src={product} className={styles.productImage} alt="Best Selling Products" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Selling;
