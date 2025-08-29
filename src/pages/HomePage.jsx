import { Button } from "@/components/ui/button";
import { ProductCard } from "../components/ProductCard";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const userSelector = useSelector((state) => state.user);
  const counterSelector = useSelector((state) => state.counter);

  const productsList = products.map((product) => {
    return (
      <ProductCard
        id={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        stock={product.stock}
        price={product.price}
      />
    );
  });

  const fetchProducts = async () => {
    setProductIsLoading(true);
    try {
      const response = await axiosInstance.get("/products");

      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setProductIsLoading(false);
    }
  };

  // fetch products data once, when home page is first mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a trend-setter with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bring timeless vibes home — our mid-century modern pieces turn every
            room into a conversation starter.
          </p>
        </div>

        {productIsLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">{productsList}</div>
        )}
      </main>
    </>
  );
};

export default HomePage;
