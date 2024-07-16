import React from 'react';
import Navbar1 from '../Navbar1/Navbar';
import Top from '../../Components/Top/Top';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Hero from '../../Components/Hero/Hero';
import Flashsale from '../../Components/Flashsales/Flashsale';
import Product from '../../Components/Product1/Product';
import Category from '../../Components/Categories/Category';
import Product1 from '../../Components/Product2/Product';
import Selling from '../../Components/Selling/Selling';
import CategoryI from '../../Components/CategoryImage/Category';
import Product2 from '../../Components/Product3/Product';
import Feature from '../../Components/Features/Feature';
import Testimony from '../../Components/Testimony/Testimony';

const Landing = ({ showFullLayout }) => {
  return (
    <div>
      {showFullLayout && <Top />}
      <Navbar1 />
      <div>
        <Hero />
        <Flashsale />
        <Product />
        <Category />
        <Product1 />
        <Selling />
        <CategoryI />
        <Product2 />
        <Feature />
        <Testimony />
      </div>
      {showFullLayout && <Footer />}
    </div>
  );
}

export default Landing;
