import { useEffect, useState } from 'react';
import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [products, setProducts] = useState();
  let [itemsInCart, setItemsInCart] = useState([]);
  let [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const countProductsInCart = itemsInCart.length;

  useEffect(() => {
    const fetchProducts = async () => {
      const dataFetched = await fetch("https://dummyjson.com/products?limit=12");
      const dataJSON = await dataFetched.json();
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, []);

  const addCartItems = (productToAdd) => {
    const arrOfItemsInCart = [...itemsInCart];
    arrOfItemsInCart.push(productToAdd);
    setItemsInCart(arrOfItemsInCart);
    alert("Prodotto aggiunto al Carrello!")
  }

  const removeCartItems = (productToRemove) => {
    const arrOfItemsInCart = [...itemsInCart];
    const productIndex = arrOfItemsInCart.indexOf(productToRemove);
    arrOfItemsInCart.splice(productIndex, 1);
    setItemsInCart(arrOfItemsInCart);
    alert("Prodotto rimosso dal Carrello!");
  }

  const menageCart = () => {
    isCartMenuOpen ? setIsCartMenuOpen(false) : setIsCartMenuOpen(true);
  }

  const cartOpenCloseButton = { isCartMenuOpen, menageCart, countProductsInCart };

  return (
    <div className="App">
      <header>
        <Navbar navButton={cartOpenCloseButton} />
      </header>
      <main className="d-flex flex-wrap justify-content-center bg-light">

        {isCartMenuOpen ? null : products ? products.map(product => {
          return <CardItem productData={product}
            buttonText="Aggiungi al Carrello"
            buttonOnClick={() => addCartItems(product)} />
        }) : "loading..."}

        {!isCartMenuOpen ? null : itemsInCart[0] ? itemsInCart.map(item => {
          return <CardItem productData={item}
            buttonClass="btn btn-danger"
            buttonText="Rimuovi dal Carrello"
            buttonOnClick={() => removeCartItems(item)} />
        }) : "Il Carrello è Vuoto"}
      </main>
    </div>
  );
}

export default App;
