import { createStore } from "redux";
import counter from './reducers';
import { clear, increment, decrement } from './actions';

export const store = createStore(counter);

export { clear, increment, decrement } 