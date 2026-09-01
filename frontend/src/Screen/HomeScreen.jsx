import ProductCard from "../component/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="font-bold text-xl underline text-center my-3">
        All Latest Products...
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-3 px-4">
          {products.map((prod) => (
            <ProductCard prod={prod} key={prod.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomeScreen;
