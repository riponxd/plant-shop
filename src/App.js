import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
