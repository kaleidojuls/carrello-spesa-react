import { createSlice } from '@reduxjs/toolkit'

//     { (ACTION PAYLOAD EXAMPLE)
//         productId: productData.id,
//         productData: productData,
//         quantity: quantity
//     }

export const cartHandlerSlice = createSlice({
    name: 'cartHandler',
    initialState: {
        products: [],
        counter: 0
    },
    reducers: {
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
            console.log("not configured")
        }
    }
})

export const { addToCart, removeFromCart } = cartHandlerSlice.actions
export default cartHandlerSlice.reducer