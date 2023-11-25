import React from 'react';

import CardItem from '../components/CardItem/CardItem.js';


function Home({ products }) {

    return (
        products && products.length > 0 ?
            products.map(product => {
                return <CardItem key={"card-" + product.id} productData={product} />
            })
            : products && products.length === 0 ?
                "no products compatible with your search" : "loading..."
    )
}

export default Home;