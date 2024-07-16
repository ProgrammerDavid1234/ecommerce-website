// src/Layouts/SimpleLayout.js
import React from 'react';
import Top from '../Components/Top/Top';
import Navbar1 from '../Pages/Navbar1/Navbar';
import Footer from '../Components/Footer/Footer';

const SimpleLayout = ({ children }) => {
  return (
    <div>
      <Top />
      <Navbar1 />
      {children}
      <Footer />
    </div>
  );
}

export default SimpleLayout;
