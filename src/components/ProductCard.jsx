import React from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ imageUrl, altImage, name, price, stock, id }) => {
  // const { imageUrl, altImage, name, price, stock } = props;

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // // MOUNT
  // useEffect(() => {
  //   console.log("Component did mount");
  // }, []);

  // // UPDATE
  // useEffect(() => {
  //   console.log("Component did Update");
  // }, [quantity]);

  // useEffect(() => {
  //   return () => {
  //     alert("Component did Unmount");
  //   };
  // }, []);

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      <Link to={"/product/" + id}>
        {/* Image */}
        <div className="aspect-square w-full overflow-hidden">
          <img className="w-full" src={imageUrl} alt={altImage} />
        </div>
      </Link>

      {/* Product Name */}
      <Link to={"/product/" + id}>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </p>
        <p className="text-muted-foreground">In stock: {stock}</p>
        <p></p>
      </Link>

      {/* Quantity Button and Add to Cart */}
      <div className="flex flex-col gap-2">
        {/* Quantity */}
        <div className="flex justify-between items-center">
          <Button
            disabled={quantity <= 0}
            onClick={decrementQuantity}
            size={"icon"}
            variant={"ghost"}
          >
            <IoIosRemove className="h-6 w-6" />
          </Button>

          <p className="text-lg font-bold">{quantity}</p>

          <Button
            disabled={quantity >= stock}
            onClick={incrementQuantity}
            size={"icon"}
            variant={"ghost"}
          >
            <IoIosAdd className="h-6 w-6" />
          </Button>
        </div>
        {/* Add to Cart */}
        <Button disabled={!Boolean(stock) || quantity < 1} className="w-full">
          {stock > 0 ? "Add to cart" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
