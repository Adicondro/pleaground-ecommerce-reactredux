import SignedPage from "@/components/guard/SignedPage";
import React from "react";

const CartPage = () => {
  return (
    <SignedPage>
      <div className="flex h-full justify-center items-center text-3xl font-fold">
        <p>Cart Page</p>
      </div>
    </SignedPage>
  );
};

export default CartPage;
