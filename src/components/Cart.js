// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import Header from './Header';
import Footer from './Footer';

function Cart() {
    const { state, dispatch } = useCart();

    const totalSubtotal = state?.cart?.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    function calculateTax(subtotal) {
        // Implement your tax calculation logic here
        // For example, you can return a fixed tax rate or calculate tax based on the subtotal
        return subtotal * 0.1; // Assuming a 10% tax rate
    }

    return (
        <div>
            <Header />
            <div className="small-container cart-page">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Size</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state?.cart?.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <div className="cart-info">
                                        <img src={`${process.env.PUBLIC_URL}/assets/${item.name}.jpg`} alt={item.name} />
                                        <div>
                                            <p>{item.name}</p>
                                            <small>Price: ${item.price}</small>
                                            <br />
                                            <p>Size: {item.size}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                                <td>{item.size}</td>
                                <td>${(item.quantity * item.price).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {totalSubtotal > 0 ? (
                <div className="total-price">
                    <table>
                        <thead>
                            <tr>
                                <th>SubTotal</th>
                                <th>Tax</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${totalSubtotal.toFixed(2)}</td>
                                <td>10%</td>
                                <td>${(totalSubtotal + calculateTax(totalSubtotal)).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ) : ('')}
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
