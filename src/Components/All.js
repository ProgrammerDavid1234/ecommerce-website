import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Top from './Top/Top'
import Product from './Product1/Product'
import Hero from './Hero/Hero'
import Flashsale from './Flashsales/Flashsale'
import Category from './Categories/Category'
import Product1 from './Product2/Product'
import Selling from './Selling/Selling'
import Categoryimage from './CategoryImage/Category'
import Product2 from './Product3/Product'
import Feature from './Features/Feature'
import Testimony from './Testimony/Testimony'

const All = () => {
  return (
    <div>
      <Hero />
      <Flashsale />
      <Product />
      <Category />
      <Product1 />
      <Selling />
      <Categoryimage />
      <Feature />
      <Testimony />
    </div>
  )
}

export default All
