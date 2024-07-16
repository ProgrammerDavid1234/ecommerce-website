import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './Components/Top/Top';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Flashsale from './Components/Flashsales/Flashsale';
import Product from './Components/Product1/Product';
import Category from './Components/Categories/Category';
import Product2 from './Components/Product2/Product';
import Selling from './Components/Selling/Selling';
import CategoryImage from './Components/CategoryImage/Category';
import Product3 from './Components/Product3/Product';
import Feature from './Components/Features/Feature';
import Testimony from './Components/Testimony/Testimony';
import Footer from './Components/Footer/Footer';
import Join from './Pages/Join/Join';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import All from './Components/All';

const App = () => {
  return (
    <Router>
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/flashsale" element={<Flashsale />} />
        <Route path="/product1" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/categoryimage" element={<CategoryImage />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
