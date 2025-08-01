import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [product, setProduct] = useState({
    id: 0,
    imageUrl: "",
    altImage: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const [productIsLoading, setProductIsLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      setProductIsLoading(true);
      const response = await axiosInstance.get("/products/" + params.productId);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setProductIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-2 gap-8">
        {productIsLoading ? (
          <Skeleton className="w-full] h-[540px]" />
        ) : (
          <div className="aspect-square w-full overflow-hidden">
            <img
              className="w-full"
              src={product.imageUrl}
              alt={product.altImage}
            />
          </div>
        )}

        <div className="flex flex-col gap-1 justify-center">
          {productIsLoading ? (
            <Skeleton className="w-[250px] h-[32px]" />
          ) : (
            <h1 className="text-xl">
              {product.name}
            </h1>
          )}

          {productIsLoading ? (
            <Skeleton className="w-[350px] h-[48px]" />
          ) : (
            <h3 className="text-3xl font-bold">
              Rp {product.price.toLocaleString("id-ID")}
            </h3>
          )}

          {productIsLoading ? (
            <Skeleton className="w-[350px] h-[120px] mt-4" />
          ) : (
            <p className="text-sm text-muted-foreground mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              mollitia maxime aspernatur amet aliquam qui ullam quidem
              perferendis. Quod voluptate officiis odio, illum eum ducimus!
            </p>
          )}

          <div className="flex items-center gap-8 mt-6">
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
                disabled={quantity >= product.stock}
                onClick={incrementQuantity}
              size={"icon"}
              variant={"ghost"}
            >
              <IoIosAdd className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center mt-8 gap-4">
            <Button w-full size="lg">
              Add to cart
            </Button>
            <Button size="icon" variant="ghost">
              <IoHeartOutline className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
