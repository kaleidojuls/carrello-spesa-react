import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from '../../store/store.js';

import CardItem from '../../components/CardItem/CardItem.js';
import Navbar from '../../components/Navbar/Navbar.js'

function Cart() {
    const productsInCart = useSelector((state) => state.cartProducts);
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

                {productsInCart[0] ? productsInCart.map(product => {
                    return <CardItem productData={product}
                        buttonClass="btn btn-danger"
                        buttonText="Rimuovi dal Carrello"
                        buttonOnClick={() => removeCartItems(product)} />
                }) : "Il Carrello è Vuoto"}

            </main>
        </div>
    )
}

export default Cart;