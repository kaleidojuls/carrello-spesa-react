import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem.js';
import { removeFromCart } from '../../store/store.js';

function Cart() {
    const cartItemsArr = useSelector((state) => state.cartItemsArr);
    const dispatch = useDispatch();

    const removeCartItems = (productToRemove) => {
        dispatch(removeFromCart(productToRemove))
        alert("Prodotto rimosso dal Carrello!");
    }

    return <>
        {cartItemsArr[0] ? cartItemsArr.map(item => {
            return <CardItem productData={item}
                buttonClass="btn btn-danger"
                buttonText="Rimuovi dal Carrello"
                buttonOnClick={() => removeCartItems(item)} />
        }) : "Il Carrello è Vuoto"}
    </>
}

export default Cart;