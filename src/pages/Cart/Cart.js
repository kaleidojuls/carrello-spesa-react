import { useDispatch, useSelector } from 'react-redux';

import CardItem from '../../components/CardItem/CardItem.js';
import Navbar from '../../components/Navbar/Navbar.js'

function Cart() {

    const productsInCart = useSelector((state) => state.cartProducts);

    return (
        <div className="Cart">
            <header>
                <Navbar page={'cart'} />
            </header>
            <main className="d-flex flex-wrap justify-content-center bg-light">
                {Object.keys(productsInCart)[0] ?
                    Object.values(productsInCart).map(cartEntry => {
                        return <CardItem productData={cartEntry.product} />
                    })
                    : "Il Carrello è Vuoto"}
            </main>
        </div>
    )
}

export default Cart;