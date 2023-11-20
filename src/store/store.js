import { configureStore } from '@reduxjs/toolkit'
import cartHandlerReducer, { addToCart, removeFromCart } from './reducers';

const store = configureStore({
    reducer: {
        cartHandler: cartHandlerReducer,
    }
})

export default store
export { addToCart, removeFromCart } 