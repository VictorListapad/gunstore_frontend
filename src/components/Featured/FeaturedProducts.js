import { useEffect, useState } from "react";
import { getAllPistols } from "../../services/pistolService";
import FeaturedProductCard from "./FeaturedProductCard";
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const getPistols = async () => {
    const res = await getAllPistols();
    setProducts(res.data.splice(0, 6));
  };
  useEffect(() => {
    getPistols();
  }, []);
  return (
    <div id="featured-products">
      <h1>Featured Products</h1>
      {products.map((product) => (
        <FeaturedProductCard key={product._id} productObj={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
