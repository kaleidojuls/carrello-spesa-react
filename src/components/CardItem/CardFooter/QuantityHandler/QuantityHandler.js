import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../store/store.js';

import "./QuantityHandler.css";


const QuantityHandler = ({ quantityState, stock, productId }) => {
    const [quantity, setQuantity, quantityInCart] = quantityState;
    const dispatch = useDispatch();

    const handleQuantity = (action) => {
        if (action === "plus" && quantity < stock) {
            if (quantityInCart) {
                dispatch(updateCart({
                    productId,
                    quantity: 1
                }));
            }
            setQuantity(quantity + 1);

        } else if (action === "minus" && quantity > 1) {
            if (quantityInCart) {
                dispatch(updateCart({
                    productId,
                    quantity: -1
                }));
            }
            setQuantity(quantity - 1);
        }
    }

    return (
        <p className="quantity">
            <i className="quantity-i bi bi-dash-circle-fill"
                onClick={() => { handleQuantity('minus') }}></i>
            {quantity}
            <i className="quantity-i bi bi-plus-circle-fill"
                onClick={() => { handleQuantity('plus') }}></i>
        </p>
    )
}

export default QuantityHandler