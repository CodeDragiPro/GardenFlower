import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/productservice';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Nos Produits</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
