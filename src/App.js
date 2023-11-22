import { useEffect, useState } from 'react';

import CardItem from './components/CardItem/CardItem';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [products, setProducts] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const dataFetched = await fetch("https://dummyjson.com/products?limit=12");
      const dataJSON = await dataFetched.json();
      setProducts(dataJSON.products);
    };
    fetchProducts();
  }, [search]);

  return (
    <div className="App">
      <header>
        <Navbar searchState={[search, setSearch]} />
      </header>
      <main className="d-flex flex-wrap justify-content-center bg-light">

        {products ? products.map(product => {
          return <CardItem key={"card-" + product.id} productData={product} />
        }) : "loading..."}

      </main>
    </div>
  )
}

export default App;
