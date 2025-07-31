import React, { useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";

const productsRaw = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFVoDMgB1hVanp6W49bZW2Y5JExq2AFV5Yg&s",
    altImage: "HEMLINGBY",
    name: "HEMLINGBY",
    price: 1995000,
    stock: 24,
  },
  {
    imageUrl:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/772/0977232_PE813475_S3.jpg",
    altImage: "ADILS",
    name: "ADILS/LINNMON",
    price: 499000,
    stock: 10,
  },
  {
    imageUrl:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/438/1243810_PE920959_S4.jpg",
    altImage: "GRÖNSTA",
    name: "GRÖNSTA",
    price: 1495000,
    stock: 7,
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5Hdnh4JAJ5KO7kUEVQPs7MkNbYccvDJz-A&s",
    altImage: "ALEX/LAGKAPTEN",
    name: "ALEX/LAGKAPTEN",
    price: 2089000,
    stock: 4,
  },
  {
    imageUrl:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/465/0246565_PE385541_S5.jpg",
    altImage: "LACK",
    name: "LACK",
    price: 1299000,
    stock: 0,
  },
  {
    imageUrl:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/093/0609306_PE684440_S5.jpg",
    altImage: "TERTIAL",
    name: "TERTIAL",
    price: 149000,
    stock: 143,
  },
];

const HomePage = () => {
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

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
            Become a trend-setter with us.
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
