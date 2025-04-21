import React from "react";

const ProductCard = ({ imageUrl, altImage, name, price, stock }) => {
  // const { imageUrl, altImage, name, price, stock } = props;

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
    </div>
  );
};

export default ProductCard;
