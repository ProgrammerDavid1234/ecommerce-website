import React from 'react'
import styles from './Category.module.css'
import Rectangle from '../Assets/Rectangle.png';
import timer from '../Assets/timer.png';
import left from '../Assets/left.png';
import right from '../Assets/right.png';
const Category = () => {
    return (
        <div>
            <div className='container'>
                <div className={styles.container} id='container'>
                    <img src={Rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
                    <p style={{ color: 'red', fontWeight: 'bold' }}>Categories</p>
                </div>
                <div className={styles.timerContainer}>
                    <h3 style={{ fontSize: '' }}>Browse By Category</h3>
                    <div className={styles.arrows}>
                        <img src={left} alt='left icon' />
                        <img src={right} alt='right icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
