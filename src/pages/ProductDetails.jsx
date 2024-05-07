import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../utils/productservice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/Hero";
import ProductGallery from "../components/ProductGallery";
import Divider from "../components/Divider";
import FloatCart from "../components/FloatCart"; 

const ProductDetails = ({ openCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false); 

  useEffect(() => {
    const getProductDetails = async () => {
      const products = await fetchProducts();
      const foundProduct = products.find((product) => product.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.log("Product not found");
      }
    };

    getProductDetails();
  }, [id]);

  const renderPriceButtons = () => {
    if (!product || !product.size || !product.price) return null;

    return product.size.map((size, index) => (
      <button
        key={index}
        className={`block px-2 py-2 mt-2 rounded w-full ${
          selectedSize === size ? "border-2 border-flowerpink" : ""
        }`}
        onClick={() => {
          setSelectedSize(size);
          setPrice(product.price[index]);
        }}
      >
        <div className="text-2xl uppercase">{formatSize(size)}</div>
        <div className="text-lg">{`${product.price[index]} €`}</div>
      </button>
    ));
  };

  const formatSize = (size) => {
    switch (size) {
      case "small":
        return "Petit";
      case "medium":
        return "Moyen";
      case "large":
        return "Grand";
      default:
        return "Unique";
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !price) {
      toast.error("Veuillez sélectionner une taille");
      return;
    }
  
    const deliveryCost = product.deliveryCost;
  
    const item = {
      id: product.id,
      title: product.title,
      image: product.images[0],
      size: selectedSize,
      quantity: quantity,
      price: price,
      deliveryCost: deliveryCost,
    };
  
    const cartData = localStorage.getItem("cartItems");
    let updatedCartItems = [];
  
    if (cartData) {
      updatedCartItems = JSON.parse(cartData);
    }
  
    updatedCartItems.push(item);
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    openCart();
  };
  

  return (
    <div className="bg-white">
      <Hero />
      <div className="mx-auto justify-center max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 my-4">
        <ProductGallery photos={product && product.images} />
        <div className="space-y-2">
          {product && (
            <>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.title}
              </h2>
              <Divider />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Choisir une taille
              </h2>
              <div className="flex space-x-4">{renderPriceButtons()}</div>
              <Divider />
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Quantité
              </h2>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 mr-2 rounded border border-flowerpink"
                  onClick={handleDecreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-3 py-1 ml-2 rounded border border-flowerpink"
                  onClick={handleIncreaseQuantity}
                  disabled={
                    quantity === product.quantity || product.quantity === 0
                  }
                >
                  +
                </button>
              </div>
              <Divider />
              <div className="py-2">
                <button
                  className="bg-flowerpink rounded-lg px-2 py-1 uppercase"
                  onClick={handleAddToCart}
                >
                  ajouter au panier
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mx-auto justify-center max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 px-4 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8 my-8">
        <div className="space-y-2">
          {product && (
            <>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.subtitle}
              </h2>
              <Divider />
              <h2 className="text-sm font-bold tracking-tight text-flowergreen sm:text-lg">
                Composition
              </h2>
              <p className="mt-4 text-gray-500">{product.stories[1]}</p>
              <Divider />
              <h2 className="text-sm font-bold tracking-tight text-flowergreen sm:text-lg">
                Entretien
              </h2>
              <p className="mt-4 text-gray-500">{product.stories[2]}</p>
            </>
          )}
        </div>
        <div>
          <img
            src={product && product.images[0]}
            className="rounded-lg bg-gray-100"
            alt="Product"
          />
        </div>
      </div>

      {/* Afficher le FloatCart si isCartOpen est true */}
      {isCartOpen && <FloatCart />}
    </div>
  );
};

export default ProductDetails;
