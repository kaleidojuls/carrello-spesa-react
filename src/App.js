import { useEffect, useState } from 'react';

import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [products, setProducts] = useState();
  const [search, setSearch] = useState("");

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
        <Navbar setSearch={setSearch} />
      </header>
      <main className="d-flex flex-wrap justify-content-center bg-light">

        {products && products.length > 0 ? products.map(product => {
          return <CardItem key={"card-" + product.id} productData={product} />
        }) :
          products && products.length === 0 ?
            "no products compatible with your search" : "loading..."}
      </main>
    </div>
  )
}

export default App;
