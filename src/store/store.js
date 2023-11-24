import { configureStore } from '@reduxjs/toolkit';

import cartHandlerReducer, { addToCart, updateCart, removeFromCart } from './reducers';

const store = configureStore({
    reducer: {
        cartHandler: cartHandlerReducer,
    }
});

export default store;
export { addToCart, updateCart, removeFromCart };