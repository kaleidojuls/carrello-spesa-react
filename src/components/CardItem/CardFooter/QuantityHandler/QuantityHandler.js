import "./QuantityHandler.css";

import { useDispatch } from 'react-redux';
import { updateCart } from '../../../../store/store.js';


const QuantityHandler = ({ quantityState, isInCart, stock }) => {
    const [quantity, setQuantity] = quantityState;
    const dispatch = useDispatch();

    const handleQuantity = (action) => {
        if (action === "plus" && quantity < stock) {
            if (isInCart) {
                dispatch(updateCart());
            }
            setQuantity(quantity + 1);

        } else if (action === "minus" && quantity > 1) {
            if (isInCart) {
                dispatch(updateCart());
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