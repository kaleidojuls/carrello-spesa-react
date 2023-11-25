import React from 'react';

import CardItem from '../components/CardItem/CardItem.js';


function Cart({ cartProducts }) {

    return (
        cartProducts[0] ? cartProducts.map(cartEntry => {
            return <CardItem key={"card-" + cartEntry.productData.id} productData={cartEntry.productData}
                quantityInCart={cartEntry.quantity} />

        }) : "Il Carrello è Vuoto"
    )
}

export default Cart;