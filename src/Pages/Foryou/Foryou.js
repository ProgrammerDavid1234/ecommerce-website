import React from 'react';
import styles from './Foryou.module.css';
import rectangle from '../../Components/Assets/Rectangle.png';
import { IoCartOutline } from 'react-icons/io5'; // Import the cart icon
import bag from '../Assets/bag.png';
import speaker from '../Assets/speaker.png';
import game from '../Assets/gamepad.png';
import jacket from '../Assets/jacket.png';
import remove from '../Assets/delete.png';
import view from '../Assets/view.png'

const Foryou = () => {
    return (
        <div>
            <div className={`${styles.container} container`} id='container'>
                <img src={rectangle} style={{ height: '25px' }} alt="Rectangle Icon" />
                <p style={{ color: 'black', fontWeight: 'bold' }}>Just For You</p>
        
            </div>
            <div className={`${styles.product} container`}>
                <div className={styles.product1}>
                    <div className={styles.info}>
                        <p className={styles.discount}>-30%</p>
                        <img className={styles.remove} src={view} alt='delete' />
                    </div>
                    <img src={bag} alt='gucci' />
                    {/* Example of commented-out JSX for product details:
                    <div className={styles.textContainer}>
                        <p className={styles.productName}>Gucci duffle bag</p>
                        <p className={styles.price}>$960</p>
                        <s className={styles.originalPrice}>$960</s>
                    </div> */}
                    <div className={styles.add}>
                        <p><IoCartOutline /> Add to cart</p>
                    </div>
                    
                </div>
              
                <div className={styles.product2}>
                    <div className={styles.info}>
                        <img className={styles.remove} src={view} alt='delete' />
                    </div>
                    <img src={speaker} alt='speaker' />
                    <div className={styles.add}>
                        <p><IoCartOutline /> Add to cart</p>
                    </div>
                </div>
                <div className={styles.product2}>
                    <div className={styles.info}>
                        <img className={styles.remove} src={view} alt='delete' />
                    </div>
                    <img src={game} alt='gamepad' />
                    <div className={styles.add}>
                        <p><IoCartOutline /> Add to cart</p>
                    </div>
                </div>
                <div className={styles.product2}>
                    <div className={styles.info}>
                        <img className={styles.remove} src={view} alt='delete' />
                    </div>
                    <img src={jacket} alt='jacket' />
                    <div className={styles.add}>
                        <p><IoCartOutline /> Add to cart</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.details} container`}>
    <div className={`${styles.text1} container`} style={{ background: 'white', color: 'black' }}>
        <p>ASUS FHD Gaming Laptop</p>
        <div className={styles.priceContainer}>
        <p>$960</p>
            <s>$1160</s>
            
        </div>
    </div>
    <div className={`${styles.text2} container`} style={{ background: 'white', color: 'black' }}>
        <p>IPS LCD Gaming Monitor</p>
        <div className={styles.priceContainer}>
        <p>$960</p>
        
        </div>
    </div>
    <div className={`${styles.text3} container`} style={{ background: 'white', color: 'black' }}>
        <p>HAVIT HV-G92 Gamepad</p>
        <div className={styles.priceContainer}>
        <p>$960</p>
       
        </div>
    </div>
    <div className={`${styles.text4} container`} style={{ background: 'white', color: 'black' }}>
        <p>AK-900 Wired Keyboard</p>

        <div className={styles.priceContainer}>
        <p>$960</p>

        </div>
    </div>
</div>

        
        </div>
    );
};

export default Foryou;
