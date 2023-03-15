import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';
import { addToCart } from './store/store.js';

function App() {
  const [products, setProducts] = useState();
  const cartItemsArr = useSelector((state) => state.cartItemsArr);
  const dispatch = useDispatch();
  const countProductsInCart = cartItemsArr.length;

  useEffect(() => {
    const fetchProducts = async () => {
      const dataFetched = await fetch("https://dummyjson.com/products?limit=12");
      const dataJSON = await dataFetched.json();
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, []);

  const addCartItems = (productToAdd) => {
    dispatch(addToCart(productToAdd));
    alert("Prodotto aggiunto al Carrello!")
  }

  return (
    <div className="App">
      <header>
        <Navbar cartButtonCounter={countProductsInCart} />
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
