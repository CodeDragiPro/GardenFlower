import React from "react";
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
  return (
    <BrowserRouter>
      <div className="md:mx-12 mx-6 mt-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
      <FloatCart/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
