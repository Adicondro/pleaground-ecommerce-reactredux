import React, { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const userSelector = useSelector((state) => state.user)
  const counterSelector = useSelector((state) => state.counter)

  const productsList = products.map((product) => {
    return (
      <ProductCard
        id={product.id}
        imageUrl={product.imageUrl}
        altImage={product.altImage}
        name={product.name}
        price={product.price}
        stock={product.stock}
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

  // Fetch Product Card Data, when page is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect;

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a trend-setter with us. {/* {userSelector.email} */}
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Bring timeless vibes home — our mid-century modern pieces turn every
            room into a conversation starter.
          </p>
          {/* <p>Counter: {counterSelector.count}</p> */}
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
