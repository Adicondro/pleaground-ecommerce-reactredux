import CartItem from "@/components/CartItem";
import SignedPage from "@/components/guard/SignedPage";
import { Separator } from "@/components/ui/separator";
import React from "react";

const CartPage = () => {
  return (
    <SignedPage>
      <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold">My Cart</h1>

        <div className="mt-10">
          <Separator />

          <div className="grid grid-cols-12 gap-8 my-8">
            <div className="col-span-7 gap-6 flex flex-col">
              <CartItem
                name="Sage Black"
                price={150000}
                imageUrl="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/438/1243810_PE920959_S4.jpg"
              />
            </div>
          </div>
        </div>
      </main>
    </SignedPage>
  );
};

export default CartPage;
