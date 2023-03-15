const initialState = {
    cartItemsArr: [],
};

const cartHandler = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItemsArr: [...state.cartItemsArr, action.payload]
            };
        case "REMOVE_FROM_CART":
            const updatedArr = [...state.cartItemsArr];
            const productIndex = updatedArr.indexOf(action.payload);
            updatedArr.splice(productIndex, 1)
            return {
                ...state,
                cartItemsArr: updatedArr
            }
        case "CLEAR":
            return { cartItemsArr: 0 };
        default:
            return state;
    }
};

export default cartHandler;