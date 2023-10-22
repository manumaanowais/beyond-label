// CartCount.js
import React from 'react';
import { useCart } from './CartContext';

function CartCount() {
  const { state } = useCart();

  if (state.cartCount > 0) {
    return (
      <div style={{ backgroundColor: 'orangered', fontSize: '16px', borderRadius: '5px', marginTop: '10px' }}>
        {state.cartCount}
      </div>
    );
  } else {
    return null;
  }
}

export default CartCount;
