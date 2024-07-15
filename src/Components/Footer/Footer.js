import React from 'react';
import styles from './Footer.module.css';
import download from '../Assets/download.png';
import social from '../Assets/social.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Exclusive</h3>
          <div className={styles.subscribeSection}>
            <p>Subscribe</p>
            <input type="email" placeholder="Enter your email" />
          </div>
          <a href="#" className={styles.get10off}>Get 10% off your first order</a>
        </div>

        <div className={styles.footerSection}>
          <h3>Support</h3>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>olonadenifemi@gmail.com</p>
          <p>+2347084700734</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Account</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <img src={download} alt="Download App" />
          <img src={social} alt="Social Media" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
