import "./CardFooter.css";

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../../../store/store.js';

import Button from "../../Button/Button";
import QuantityHandler from './QuantityHandler/QuantityHandler.js';

const CardFooter = ({ productData, cardType }) => {

    const { id, price, stock } = productData;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const addCartItem = (productId) => {
        dispatch(addToCart({
            [productId]: {
                product: productData,
                quantity: quantity
            }
        }));
    }

    const removeCartItem = () => {
        dispatch(removeFromCart({}))
    }

    return (
        <div className="card-footer d-flex justify-content-around">
            <p className="price">${price}</p>
            <QuantityHandler quantity={quantity} setQuantity={setQuantity} stock={stock} />

            {cardType == 'productDisplay' ?
                <Button buttonOnClick={() => { addCartItem(id) }}>
                    {<i className="bi bi-cart-plus"></i>}
                </Button> :
                <Button buttonOnClick={() => { removeCartItem() }} className="btn btn-danger">
                    {<i className="bi bi-cart-x"></i>}
                </Button>}
        </div>
    )
}

export default CardFooter