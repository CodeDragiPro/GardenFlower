import React, { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const FloatCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="fixed bottom-8 right-8">
      <div className="relative">
        <span className="relative flex items-center justify-center h-12 w-12">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flowergreen opacity-75"></span>
          <span className="relative inline-flex rounded-full h-12 w-12 bg-flowergreen items-center justify-center" onClick={toggleCart}>
            <FaShoppingCart size={24} className="text-flowerpink" />
          </span>
        </span>
        <div className={`${isCartOpen ? 'block' : 'hidden'} fixed ${isCartOpen ? 'bottom-0' : 'top-0'} right-0 w-full md:w-1/4 h-1/2 md:h-full bg-flowerpink rounded-xl shadow-xl transition-all duration-500 ease-in-out md:translate-y-0 md:bottom-0 md:top-0`}>
          <button onClick={toggleCart} className="absolute top-0 right-0 m-4">
            <FaTimes size={24} className="text-flowergreen" />
          </button>
          <div className="p-4 h-full">
            Contenu du panier...
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            commodo mattis libero, vel semper metus ultricies nec.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatCart;
