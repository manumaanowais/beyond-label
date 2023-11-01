import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/auth/SignUp';
import Login from './components/auth/login';
import ForgotPassword from './components/auth/ForgotPassword';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/product-details/:imageName" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
