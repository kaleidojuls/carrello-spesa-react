import { createSlice } from '@reduxjs/toolkit'

// STATE EXAMPLE
// const initialState = [
//     { (ACTION PAYLOAD EXAMPLE)
//         productId: productData.id,
//         productData: productData,
//         quantity: quantity
//     }
//     ...
// ];

export const cartHandlerSlice = createSlice({
    name: 'cartHandler',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const isInCart = state.filter(productEntry => {
                return productEntry.productId === action.payload.productId
            });
            if (isInCart.length === 0) {
                state.push(action.payload)
            } else {
                return state.map(productEntry => {
                    if (productEntry.productId === action.payload.productId) {
                        return {
                            ...productEntry,
                            quantity: productEntry.quantity + action.payload.quantity
                        }
                    } else {
                        return productEntry
                    }
                })
            }
        },

        removeFromCart(state, action) {
            console.log("not configured")
        }
    }
})

export const { addToCart, removeFromCart } = cartHandlerSlice.actions
export default cartHandlerSlice.reducer