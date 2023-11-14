import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/store.js';

import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();

  const addCartItems = (productToAdd) => {
    dispatch(addToCart(productToAdd));
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const dataFetched = await fetch("https://dummyjson.com/products?limit=12");
      const dataJSON = await dataFetched.json();
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="d-flex flex-wrap justify-content-center bg-light">

        {products ? products.map(product => {
          return <CardItem productData={product}
            buttonText="Aggiungi al Carrello"
            buttonOnClick={() => addCartItems(product)} />
        }) : "loading..."}

      </main>
    </div>
  );
}

export default App;
