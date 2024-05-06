import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoGardenFlower.png";
import { FaTimes, FaBars, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <Link
        to="/"
        className="items-center hidden md:block"
        onClick={closeMobileMenu}
      >
        <img src={logo} className="w-[10vh] items-end justify-end" alt="Logo" />
      </Link>
      <nav className="flex justify-between items-center w-full text-flowergreen font-medium text-lg top-0 font-josefin">
        <Link
          to="/"
          className="flex items-center md:hidden"
          onClick={closeMobileMenu}
        >
          <img src={logo} className="w-[10vh]" alt="Logo" />
        </Link>
        <div className="hidden md:flex space-x-4 ml-auto">
          <Link to="/" onClick={closeMobileMenu}>
            Accueil
          </Link>
          <Link to="/products" onClick={closeMobileMenu}>
            Notre Engagement
          </Link>
          <Link to="/about" onClick={closeMobileMenu}>
            Nos Produits
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            Notre Histoire
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link to="/login" onClick={closeMobileMenu}>
            S'identifier
          </Link>
          <Link to="/contact" onClick={closeMobileMenu}>
            <FaShoppingCart className="m-1" size={20} />
          </Link>
        </div>

        <div
          className="flex md:hidden text-flowergreen space-x-2"
          onClick={toggleMobileMenu}
        >
          <Link to="/contact" onClick={closeMobileMenu}>
            <FaShoppingCart size={20} />
          </Link>
          <FaBars size={20} />
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-flowerpink flex flex-col items-center justify-center z-50">
            <div className="absolute top-0 right-0 mt-6 mr-4">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="text-center space-y-4 flex flex-col items-center">
              <Link to="/" className="block" onClick={closeMobileMenu}>
                Accueil
              </Link>
              <Link to="#" onClick={closeMobileMenu}>
                Qui sommes nous ?
              </Link>
              <Link to="/produits" onClick={closeMobileMenu}>
                Produits
              </Link>
              <Link to="#" onClick={closeMobileMenu}>
                Contact
              </Link>
              <Link to="/contact" onClick={closeMobileMenu}>
            S'identifier
          </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
