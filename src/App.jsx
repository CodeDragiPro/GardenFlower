import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from './pages/ProductPage';
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signin from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="md:mx-12 mx-6 mt-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
