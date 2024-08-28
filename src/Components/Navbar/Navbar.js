import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import search from '../Assets/search.png';
import love from '../Assets/love.png';
import cart1 from '../Assets/Cart1.png';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <h3><Link to='/' style={{textDecoration:'none', color:'black'}}>Exclusive</Link></h3>
        </div>
        <div className={styles.links}>
          <Link to="/all">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Join</Link>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.searchInput}
            />
            <img src={search} alt="Search" className={styles.searchIcon} />
          </div>
          <div className={styles.iconContainer}>
            <img src={love} alt="Love" className={styles.icon} />
            <img src={cart1} alt="Cart" className={styles.icon} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
