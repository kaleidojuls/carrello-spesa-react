import { createSlice } from '@reduxjs/toolkit'

export const cartHandlerSlice = createSlice({
    name: 'cartHandler',
    initialState: {
        products: [],
        counter: 0
    },
    reducers: {
        // ACTION.PAYLOAD EXAMPLE: {  
        //   productId: productData.id,
        //   productData: productData,
        //   quantity: quantity 
        // }
        addToCart(state, action) {
            const isInCart = state.products.some(productEntry => {
                return productEntry.productId === action.payload.productId
            });

            if (isInCart) {
                state.products = state.products.map(productEntry => {
                    const quantity = productEntry.quantity + action.payload.quantity;
                    return productEntry.productId === action.payload.productId ?
                        { ...productEntry, quantity } : productEntry
                })
            } else {
                state.products.push(action.payload);
            }
            state.counter += action.payload.quantity
        },

        updateCart(state, action) {
            state.products = state.products.map(productEntry => {
                const quantity = productEntry.quantity + action.payload.quantity;
                return productEntry.productId === action.payload.productId ?
                    { ...productEntry, quantity } : productEntry
            })
            state.counter += action.payload.quantity
        },

        removeFromCart(state, action) {
            state.products = state.products.filter(cartEntry => {
                return cartEntry.productId !== action.payload.productId
            });
            state.counter -= action.payload.quantity;
        }
    }
})

export const { addToCart, updateCart, removeFromCart } = cartHandlerSlice.actions
export default cartHandlerSlice.reducer