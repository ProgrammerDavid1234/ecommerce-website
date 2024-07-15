import React from 'react'
import Top from './Components/Top/Top'
import Navbar from './Components/Navbar/Navbar'

import Hero from './Components/Hero/Hero'
import Flashsale from './Components/Flashsales/Flashsale'
import Product from './Components/Product1/Product'
import Category from './Components/Categories/Category'
import Product2 from './Components/Product2/Product'
import Selling from './Components/Selling/Selling'
import CategoryImage from './Components/CategoryImage/Category'
import Product3 from './Components/Product3/Product'
import Feature from './Components/Features/Feature'
import Testimony from './Components/Testimony/Testimony'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <Hero />
      <Flashsale />
      <Product />
      <Category />
      <Product2 />
      <Selling />
      <CategoryImage />
      <Product3 />
      <Feature />
      <Testimony />
      <Footer />
    </div>
  )
}

export default App