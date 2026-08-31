import { useState } from "react";
import ProductCard from "../component/ProductCard";
import { useEffect } from "react";
import axios from 'axios'



const HomeScreen = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
const fetchProducts = async () => {
  const {data} = await axios.get('/api/products');
  setProducts(data);
}
fetchProducts()
},[])

    return (
        <div>
            <h1 className="font-bold text-xl underline text-center my-3">All Latest Products...</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-3 px-4">
              {products.map((prod) => (
                <ProductCard prod={prod} key={prod.id} />
              ))}
            </div>
        </div>
    )

}
export default HomeScreen;