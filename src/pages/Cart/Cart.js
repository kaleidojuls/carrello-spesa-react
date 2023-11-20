import { useSelector } from 'react-redux';

import CardItem from '../../components/CardItem/CardItem.js';
import Navbar from '../../components/Navbar/Navbar.js'

function Cart() {

    const cartProducts = useSelector((state) => state.cartHandler);

    return (
        <div className="Cart">
            <header>
                <Navbar page={'cart'} />
            </header>
            <main className="d-flex flex-wrap justify-content-center bg-light">
                {cartProducts[0] ? cartProducts.map(cartEntry => {
                    return <CardItem productData={cartEntry.productData}
                        quantityInCart={cartEntry.quantity} />

                }) : "Il Carrello è Vuoto"}
            </main>
        </div>
    )
}

export default Cart;