import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="font-Josefin m-2 relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-72 object-cover"
          style={{ filter: "brightness(60%)" }}
        />

        <h2 className="absolute inset-0 flex items-center justify-center text-flowerpink uppercase font-light text-2xl text-center">
          {product.title}
        </h2>

        <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 pb-2">
          <div className="bg-flowerpink px-4 rounded-full mt-2">
            <div className=" text-black font-medium uppercase pt-1.5 text-sm">
              {product.categories[0]}
            </div>
          </div>
          <div className=" text-lg font-semibold text-flowerpink mt-2">
            {product.price1}€
            <hr className="border-flowerpink" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
