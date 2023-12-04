import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';


function App() {

  const [products, setProducts] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");
  const cartProducts = useSelector((state) => state.cartHandler.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `https://dummyjson.com/products/search?q=${search}&limit=12`;
      const dataFetched = await fetch(url);
      const dataJSON = await dataFetched.json();
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, [search]);

  return (
    <div className="App">
      <header>
        <Navbar setSearch={setSearch} pageState={[page, setPage]} />
      </header>
      <main className="d-flex flex-wrap justify-content-center bg-light mt-5 pt-3">
        {
          page === "home" ? <Home products={products} />
            : <Cart cartProducts={cartProducts} />
        }
      </main>
    </div>
  )
}

export default App;
