import { createSlice } from '@reduxjs/toolkit'

export const cartHandlerSlice = createSlice({
    name: 'cartHandler',
    initialState: {
        products: [],
        counter: 0
    },
    reducers: {
        // ACTION PAYLOAD EXAMPLE: {  
        //   productId: productData.id,
        //   productData: productData,
        //   quantity: quantity 
        // }
        addToCart(state, action) {
            const isInCart = state.products.filter(productEntry => {
                return productEntry.productId === action.payload.productId
            });

            if (isInCart.length === 0) {
                state.products.push(action.payload)
                state.counter += action.payload.quantity
            } else {
                state.products = state.products.map(productEntry => {
                    if (productEntry.productId === action.payload.productId) {
                        return {
                            ...productEntry,
                            quantity: productEntry.quantity + action.payload.quantity
                        }
                    } else {
                        return productEntry
                    }
                })
                state.counter += action.payload.quantity
            }
        },

        removeFromCart(state, action) {
            state.products = state.products.filter(cartEntry => {
                return cartEntry.productId !== action.payload.productId
            });
            state.counter -= action.payload.quantity;
        }
    }
})

export const { addToCart, removeFromCart } = cartHandlerSlice.actions
export default cartHandlerSlice.reducer