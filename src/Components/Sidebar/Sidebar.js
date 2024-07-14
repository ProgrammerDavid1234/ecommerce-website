import React from 'react';
import styles from './Sidebar.module.css'; // Make sure to use the correct CSS module import
import side from '../Assets/side.png';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href=''>Woman’s Fashion <img src={side} alt="Arrow" /></a>
      <a href=''>Men’s Fashion <img src={side} alt="Arrow" /></a>
      <a href=''>Electronics</a>
      <a href=''>Home & Lifestyle</a>
      <a href=''>Medicine</a>
      <a href=''>Sports & Outdoor</a>
      <a href=''>Baby’s & Toys</a>
      <a href=''>Groceries & Pets</a>
      <a href=''>Health & Beauty</a>
    </div>
  );
}

export default Sidebar;
