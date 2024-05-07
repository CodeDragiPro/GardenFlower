// App.jsx

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import FloatCart from "./components/FloatCart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="md:mx-12 mx-6 mt-6">
      <Navbar openCart={openCart}  setIsCartOpen={setIsCartOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetails openCart={openCart} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      {isCartOpen && <FloatCart closeCart={closeCart} setIsCartOpen={setIsCartOpen} />}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
