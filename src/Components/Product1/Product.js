import React from 'react';
import styles from './Product.module.css';
import gamepad from '../Assets/gamepad.png';
import keyboard from '../Assets/keyboard.png';
import desktop from '../Assets/desktop.png';
import chair from '../Assets/chair.png';
import star from '../Assets/Five-star.png';
import reaction from '../Assets/reactions.png';
import discount from '../Assets/Discount.png';

const Product = () => {
  return (
    <div className='container'>
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={gamepad} className={styles.image} alt="Gamepad" />
        <p>HAVIT HV-G92 Gamepad</p>
        <p>$120</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={gamepad} className={styles.image} alt="Gamepad" />
        <p>HAVIT HV-G92 Gamepad</p>
        <p>$120</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={keyboard} className={styles.image} alt="Keyboard" />
        <p>HAVIT HV-KB395L Keyboard</p>
        <p>$60</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={keyboard} className={styles.image} alt="Keyboard" />
        <p>HAVIT HV-KB395L Keyboard</p>
        <p>$60</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={keyboard} className={styles.image} alt="Keyboard" />
        <p>HAVIT HV-KB395L Keyboard</p>
        <p>$60</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={keyboard} className={styles.image} alt="Keyboard" />
        <p>HAVIT HV-KB395L Keyboard</p>
        <p>$60</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={desktop} className={styles.image} alt="Desktop" />
        <p>HAVIT HV-PC220 Desktop</p>
        <p>$700</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>

      <div className={styles.product}>
        <img src={discount} className={styles.discount} alt="Discount" />
        <img src={reaction} className={styles.reaction} alt="Reaction" />
        <img src={chair} className={styles.image} alt="Chair" />
        <p>HAVIT HV-CH106 Chair</p>
        <p>$150</p>
        <img src={star} className={styles.star} alt="Star Rating" />
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
    <br />
    <br />
    <div className='button' style={{ display: 'flex', justifyContent: 'center' }}>
  <button className='btn btn-danger'>View All Products</button>
</div>
<hr />
    </div>

  );
}

export default Product;
