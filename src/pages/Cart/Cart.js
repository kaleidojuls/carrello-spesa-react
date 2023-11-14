import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem.js';
import Navbar from '../../components/Navbar/Navbar.js'
import { removeFromCart } from '../../store/store.js';

function Cart() {
    const cartItemsArr = useSelector((state) => state.cartItemsArr);
    const dispatch = useDispatch();

    const removeCartItems = (productToRemove) => {
        dispatch(removeFromCart(productToRemove))
    }

    return (
        <div className="Cart">
            <header>
                <Navbar page={'cart'} />
            </header>
            <main className="d-flex flex-wrap justify-content-center bg-light">

                {cartItemsArr[0] ? cartItemsArr.map(item => {
                    return <CardItem productData={item}
                        buttonClass="btn btn-danger"
                        buttonText="Rimuovi dal Carrello"
                        buttonOnClick={() => removeCartItems(item)} />
                }) : "Il Carrello è Vuoto"}

            </main>
        </div>
    )
}

export default Cart;