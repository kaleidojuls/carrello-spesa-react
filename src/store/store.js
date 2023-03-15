import { createStore } from "redux";
import cartHandler from './reducers';
import { addToCart, removeFromCart, clear } from './actions';

export const store = createStore(cartHandler);

export { addToCart, removeFromCart, clear } 