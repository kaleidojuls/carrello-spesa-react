import "./CardFooter.css";

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from '../../../store/store.js';

import Button from "../../Button/Button";
import QuantityHandler from './QuantityHandler/QuantityHandler.js';

const CardFooter = ({ productData, quantityInCart }) => {

    const dispatch = useDispatch();
    const defaultQuantity = quantityInCart || 1;
    const [quantity, setQuantity] = useState(defaultQuantity);
    const { price, stock } = productData;

    const addCartItem = (productId, quantity) => {
        dispatch(addToCart({
            productId,
            productData,
            quantity
        }));
    }

    const removeCartItem = (productId, quantity) => {
        dispatch(removeFromCart({
            productId,
            quantity
        }))
    }

    return (
        <div className="card-footer d-flex justify-content-around">
            <p className="price">${price * quantity}</p>
            <QuantityHandler quantityState={[quantity, setQuantity, quantityInCart]}
                stock={stock} productId={productData.id} />

            {quantityInCart ?
                <Button buttonOnClick={() => { removeCartItem(productData.id, quantity) }} className="btn btn-danger">
                    <i className="bi bi-cart-x"></i>
                </Button>
                :
                <Button buttonOnClick={() => { addCartItem(productData.id, quantity) }}>
                    <i className="bi bi-cart-plus"></i>
                </Button>
            }
        </div>
    )
}

export default CardFooter