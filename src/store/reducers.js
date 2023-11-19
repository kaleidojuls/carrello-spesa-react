const initialState = {
    cartProducts: {},
};

const cartHandler = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartProducts: { ...state.cartProducts, ...action.payload }
            };
        case "REMOVE_FROM_CART":
            const updatedArr = [...state.cartProducts];
            const productIndex = updatedArr.indexOf(action.payload);
            updatedArr.splice(productIndex, 1)
            return {
                ...state,
                cartProducts: updatedArr
            }
        case "CLEAR":
            return { cartProducts: 0 };
        default:
            return state;
    }
};

export default cartHandler;