import React from 'react'
import Top from './Components/Top/Top'
import Navbar from './Components/Navbar/Navbar'

import Hero from './Components/Hero/Hero'
import Flashsale from './Components/Flashsales/Flashsale'
import Product from './Components/Product1/Product'
import Category from './Components/Categories/Category'
import Product2 from './Components/Product2/Product'

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
    </div>
  )
}

export default App