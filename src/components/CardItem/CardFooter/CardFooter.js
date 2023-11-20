import "./CardFooter.css";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../../../store/store.js';

import Button from "../../Button/Button";
import QuantityHandler from './QuantityHandler/QuantityHandler.js';

const CardFooter = ({ productData, quantityInCart }) => {

    const dispatch = useDispatch();
    const { price, stock } = productData;
    const defaultQuantity = quantityInCart || 1;
    const [quantity, setQuantity] = useState(defaultQuantity);

    const addCartItem = (productData, quantity) => {

        dispatch(addToCart({
            productId: productData.id,
            productData: productData,
            quantity: quantity
        }));
    }

    const removeCartItem = () => {
        dispatch(removeFromCart({}))
    }

    return (
        <div className="card-footer d-flex justify-content-around">
            <p className="price">${price}</p>
            <QuantityHandler quantity={quantity} setQuantity={setQuantity} stock={stock} />
            {quantityInCart ?
                <Button buttonOnClick={() => { removeCartItem(productData) }} className="btn btn-danger">
                    <i className="bi bi-cart-x"></i>
                </Button>
                :
                <Button buttonOnClick={() => { addCartItem(productData, quantity) }}>
                    <i className="bi bi-cart-plus"></i>
                </Button>
            }
        </div>
    )
}

export default CardFooter