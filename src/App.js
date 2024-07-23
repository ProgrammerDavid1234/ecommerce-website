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
import Landing from './Pages/Landing/Landing';
import Wishlist from './Pages/Wishlist/Wishlist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Top /><Navbar /><All /><Footer /></>} />
        <Route path="/hero" element={<><Top /><Navbar /><Hero /><Footer /></>} />
        <Route path="/flashsale" element={<><Top /><Navbar /><Flashsale /><Footer /></>} />
        <Route path="/product1" element={<><Top /><Navbar /><Product /><Footer /></>} />
        <Route path="/category" element={<><Top /><Navbar /><Category /><Footer /></>} />
        <Route path="/product2" element={<><Top /><Navbar /><Product2 /><Footer /></>} />
        <Route path="/selling" element={<><Top /><Navbar /><Selling /><Footer /></>} />
        <Route path="/categoryimage" element={<><Top /><Navbar /><CategoryImage /><Footer /></>} />
        <Route path="/product3" element={<><Top /><Navbar /><Product3 /><Footer /></>} />
        <Route path="/feature" element={<><Top /><Navbar /><Feature /><Footer /></>} />
        <Route path="/testimony" element={<><Top /><Navbar /><Testimony /><Footer /></>} />
        <Route path="/join" element={<><Top /><Navbar /><Join /><Footer /></>} />
        <Route path="/login" element={<><Top /><Navbar /><Login /><Footer /></>} />
        <Route path="/about" element={<><Top /><Navbar /><About /><Footer /></>} />
        <Route path="/contact" element={<><Top /><Navbar /><Contact /><Footer /></>} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/landing" element={<Landing showFullLayout />} />
        <Route path="/wishlist" element={<Wishlist  />} />

      </Routes>
    </Router>
  );
}

export default App;
