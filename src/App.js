import { useEffect, useState } from 'react';
import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';
import CartMenu from './components/CartMenu/CartMenu';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';

function App() {
  const [products, setProducts] = useState();
  let [countCart, setCountCart] = useState(0);
  let [itemsInCart, setItemsInCart] = useState([]);
  let [isCartMenuOpen, setisCartMenuOpen] = useState(false);

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
    setCountCart(countCart + 1);
    alert("Prodotto aggiunto al Carrello!")
  }

  const removeCartItems = (productToRemove) => {
    const arrOfItemsInCart = [...itemsInCart];
    const productIndex = arrOfItemsInCart.indexOf(productToRemove);
    arrOfItemsInCart.splice(productIndex, 1);
    setItemsInCart(arrOfItemsInCart);
    setCountCart(countCart - 1);
    alert("Prodotto rimosso dal Carrello!");
  }

  const manageCart = () => {
   isCartMenuOpen ? setisCartMenuOpen(false) : setisCartMenuOpen(true);
  }

  //prova per diminuire i parametri da passare al componente Navbar
  const ciccio = {countCart, isCartMenuOpen, manageCart}

  return (
    <div className="App">
      <header>
        <Navbar infoVarieCiccio={ciccio} />
      </header>
      <main>
        <CartMenu isOpen={isCartMenuOpen}>
          {!isCartMenuOpen ? null : itemsInCart[0] ? itemsInCart.map(item => {
            return <CardItem productData={item}
              buttonClass="btn btn-danger"
              buttonText="Rimuovi dal Carrello"
              buttonOnClick={() => removeCartItems(item)} />
          }) : "Il Carrello è Vuoto"}
        </CartMenu>
        <ProductsDisplay isCartMenuOpen={isCartMenuOpen}>
          {products ? products.map(product => {
            return <CardItem productData={product}
              buttonText="Aggiungi al Carrello"
              buttonOnClick={() => addCartItems(product)} />
          }) : "loading..."}
        </ProductsDisplay>
      </main>
    </div>
  );
}

export default App;
