import React from 'react'
import styles from './Product.module.css'
import Rectangle from '../Assets/Rectangle.png';
import timer from '../Assets/timer.png';
import left from '../Assets/left.png';
import right from '../Assets/right.png';
import Product1 from '../Product1/Product';

const Product = () => {
  return (
    <div className='container'>
    <div className={styles.container} id='container'>
      <img src={Rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
      <p style={{ color: 'red', fontWeight: 'bold' }}>Our Products</p>
    </div>
    <div className={styles.timerContainer}>
      <h3 style={{fontSize:''}}>Explore Our Products</h3>
      <div className={styles.arrows}>
        <img src={left} alt='left icon' />
        <img src={right} alt='right icon' />
      </div>
    </div>
    <Product1 />
  </div>
  )
}

export default Product
