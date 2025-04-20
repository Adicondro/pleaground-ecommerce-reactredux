import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />
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

        <ProductCard/>

      </main>
      <Footer />
    </>
  );
}

export default App;
