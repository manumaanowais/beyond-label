import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
    cartCount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemToAdd = action.item;
            const existingItem = state?.cart?.find(
                item => item?.id === itemToAdd?.id && item?.size === itemToAdd?.size
            );

            if (existingItem) {
                const updatedCart = state.cart.map(item => {
                    if (item.id === existingItem.id && item.size === existingItem.size) {
                        return {
                            ...item,
                            quantity: parseFloat(item.quantity) + parseFloat(itemToAdd.quantity),
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cart: updatedCart,
                    cartCount: parseFloat(state.cartCount) + parseFloat(itemToAdd.quantity),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, itemToAdd],
                    cartCount: parseFloat(state.cartCount) + parseFloat(itemToAdd.quantity),
                };
            }

        case 'REMOVE_FROM_CART':
            console.log("remove : ", action)
            const updatedCart = state?.cart?.filter(
                item => item?.id !== action?.item?.id || item?.size !== action?.item?.size
            );
            console.log("remove updated : ", updatedCart)
            return {
                ...state,
                cart: updatedCart,
                cartCount: state.cartCount - action?.item?.quantity,
            };

        case 'UPDATE_QUANTITY':
            const { id, size, quantity } = action?.item;
            const updatedCartOfUpdate = state.cart.map(item => {
                if (item?.id === id && item?.size === size) {
                    return { ...item, quantity: quantity };
                } else {
                    return item;
                }
            });
            const updatedCartCount = updatedCartOfUpdate.reduce((count, item) => parseFloat(count) + parseFloat(item.quantity), 0);

            return {
                ...state,
                cart: updatedCartOfUpdate,
                cartCount: updatedCartCount,
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
                cartCount: 0,
            };

        default:
            return state;
    }
};

export const useCart = () => {
    return useContext(CartContext);
};

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
