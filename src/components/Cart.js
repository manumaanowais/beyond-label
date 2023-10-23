// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import Header from './Header';
import Footer from './Footer';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton, Button } from '@material-ui/core';

function Cart() {
    const { state, dispatch } = useCart();
    const btnstyle = { margin: '8px 0' };

    const totalSubtotal = state?.cart?.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);

    function calculateTax(subtotal) {
        // Implement your tax calculation logic here
        // For example, you can return a fixed tax rate or calculate tax based on the subtotal
        return subtotal * 0.1; // Assuming a 10% tax rate
    }

    const handleIncrement = (item) => {
        dispatch({ type: 'UPDATE_QUANTITY', item: { id: item?.id, quantity: parseFloat(item?.quantity) + 1, size: item?.size } });
    };

    const handleDecrement = (item) => {
        if (item?.quantity > 1) {
            dispatch({ type: 'UPDATE_QUANTITY', item: { id: item?.id, quantity: parseFloat(item?.quantity) - 1, size: item?.size } });
        } else {
            dispatch({ type: 'REMOVE_FROM_CART', item });
        }
    };

    const handleRemoveItem = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', item });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const handleBuyNow = () => {
        console.log("CART : ", state?.cart);
        console.log("TOTAL AMOUNT : ", (totalSubtotal + calculateTax(totalSubtotal)).toFixed(2))
    }

    return (
        <div>
            <Header />
            <div className="small-container cart-page">
                {state.cart.length === 0 ? (
                    <div style={{ textAlign: 'center' }}>
                        <img width='200px' src={`${process.env.PUBLIC_URL}/assets/empty-cart.jpg`} alt='Empty Cart' />
                        <h2>Your cart is empty</h2>
                        <h5>Start Shopping Now</h5>
                    </div>
                ) : (
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
                                <tr key={`${item.id}-${item.size}`}>
                                    <td>
                                        <div className="cart-info">
                                            <img src={`${process.env.PUBLIC_URL}/assets/${item.name}.jpg`} alt={item.name} />
                                            <div>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='increment-decrement-btn'>
                                        <button className='decrement-btn' onClick={() => handleDecrement(item)}>-</button>
                                        <span className='quantity-count'>{item.quantity}</span>
                                        <button className='increment-btn' onClick={() => handleIncrement(item)}>+</button>
                                    </td>
                                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{item.price}</td>
                                    <td>{item.size}</td>
                                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{(item.quantity * item.price).toFixed(2)}</td>
                                    <td className='cart-action'>
                                        <Tooltip title="Remove" arrow>
                                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => handleRemoveItem(item)}><DeleteForeverOutlinedIcon /></IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

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
                                    <td className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{totalSubtotal.toFixed(2)}</td>
                                    <td>10%</td>
                                    <td className='inr-svg'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg>{(totalSubtotal + calculateTax(totalSubtotal)).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : ('')}

                {state.cart.length !== 0 ? (
                    <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '12px'}}>
                        <Button type='button' color='secondary' variant="outlined" style={btnstyle} onClick={handleClearCart}>CLEAR CART</Button>
                        <Button type='button' color='primary' variant="contained" style={btnstyle} onClick={handleBuyNow}>BUY NOW</Button>
                    </div>) : ('')}
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
