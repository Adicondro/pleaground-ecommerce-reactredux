import React from "react";
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const ProductCard = ({ imageUrl, altImage, name, price, stock }) j=> {
  // const { imageUrl, altImage, name, price, stock } = props;

  const addToCart = () => {
    alert("Added to Cart");
  };

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <img className="w-full" src={imageUrl} alt={altImage} />
      </div>

      {/* Product Name */}
      <div>
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </p>
        <p className="text-muted-foreground">In stock: {stock}</p>
        <p></p>
      </div>

      {/* Quantity Button and Add to Cart */}
      <div className="flex flex-col gap-2">
        {/* Quantity */}
        <div className="flex justify-between items-center">
          <Button size={"icon"} variant={"ghost"}>
            <IoIosRemove className="h-6 w-6" />
          </Button>

          <p className="text-lg font-bold">0</p>

          <Button size={"icon"} variant={"ghost"}>
            <IoIosAdd className="h-6 w-6" />
          </Button>
        </div>
        {/* Add to Cart */}
        <Button onClick={addToCart} className="w-full">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
