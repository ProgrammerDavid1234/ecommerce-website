import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import search from '../Assets/search.png';
import love from '../Assets/love.png';
import cart1 from '../Assets/Cart1.png';
import user from '../Assets/user.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <h3><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Exclusive</Link></h3>
        </div>
        <div className={styles.links}>
          <Link to="/landing">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/join">Logout</Link>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="What are you looking for?"
              className={styles.searchInput}
            />
            <img src={search} style={{height:'20px'}} alt="Search" className={styles.searchIcon} />
          </div>
          <div className={styles.iconContainer}>
            <Link to="/wishlist">
              <img src={love} alt="Love" className={styles.icon} />
            </Link>
            <img src={cart1} alt="Cart" className={styles.icon} />
            <div className={styles.userIconContainer} onClick={toggleDropdown}>
              <img src={user} alt="User" className={styles.icon} />
              {dropdownVisible && (
                <div className={styles.dropdownMenu}>
                  <Link to="/account">Manage My Account</Link>
                  <Link to="/orders">My Orders</Link>
                  <Link to="/cancellations">My Cancellations</Link>
                  <Link to="/reviews">My Reviews</Link>
                  <Link to="/join">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;