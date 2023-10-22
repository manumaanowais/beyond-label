import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './components/CartContext';

ReactDOM.render(
  <CartProvider><App /></CartProvider>,
  document.getElementById('root')
);

reportWebVitals();
