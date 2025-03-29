import React from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[90vh]">
        <Box />
      </main>
      <Footer />
    </>
  );
}

export default App;
