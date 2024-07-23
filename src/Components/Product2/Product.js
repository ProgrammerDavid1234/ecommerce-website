import React from 'react';
import styles from './Product.module.css';
import phone from '../Assets/phone.png';
import computer from '../Assets/computer.png';
import smartwatch from '../Assets/SmartWatch.png';
import camera from '../Assets/camera.png';
import headphone from '../Assets/Headphone.png';
import gaming from '../Assets/Gamepad.png';

const Product = () => {
  const products = [
    { id: 1, image: phone, name: 'Phone' },
    { id: 2, image: computer, name: 'Computer' },
    { id: 3, image: smartwatch, name: 'Smartwatch' },
    { id: 4, image: camera, name: 'Camera' },
    { id: 5, image: headphone, name: 'Headphone' },
    { id: 6, image: gaming, name: 'Gaming' },
    { id: 7, image: gaming, name: 'Gaming' },
    { id: 8, image: gaming, name: 'Gaming' },
  ];

  return (
    <div className="container">
      <div className={styles.container}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`${styles.product} ${product.specialClass ? product.specialClass : ''}`}
          >
            <img src={product.image} alt={product.name} className={product.name === 'Camera' ? styles.camera : ''} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Product;
