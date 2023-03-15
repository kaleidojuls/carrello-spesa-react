const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const clear = {
    type: 'CLEAR'
}