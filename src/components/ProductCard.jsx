import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Prix: {product.price1} €</p>
      {/* Lien vers la page de détails du produit */}
      <Link to={`/product/${product.id}`} className="block mt-4 text-blue-500">
        Voir détails
      </Link>
    </div>
  );
};

export default ProductCard;
