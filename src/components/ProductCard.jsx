import React from "react";

const ProductCard = () => {
  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col gap-4">
      {/* Image */}
      <div className="aspect-square w-full overflow-hidden">
        <img
          className="w-full"
          src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/772/0977229_PE813472_S3.jpg"
          alt="ADILS"
        />
      </div>

      {/* Product Name */}
      <div>
        <p className="text-md">ADILS LINMONN</p>
        <p className="text-xl font-semibold">Rp 100.000</p>
        <p className="text-muted-foreground">In stock: 10</p>
        <p></p>
      </div>
    </div>
  );
};

export default ProductCard;
