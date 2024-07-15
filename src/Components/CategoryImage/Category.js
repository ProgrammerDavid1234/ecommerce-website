import React from 'react'
import styles from './Category.module.css'
import category from '../Assets/category.png'

const Category = () => {
  return (
    <div className='container'>
      <img src={category} className={styles.categoryImage} alt="Category" />
    </div>
  )
}

export default Category
