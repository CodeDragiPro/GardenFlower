import React, { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../utils/productservice';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Divider from '../components/Divider';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleCardCount, setVisibleCardCount] = useState(12);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setAllProducts(productsData);
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedProducts(products.slice(0, visibleCardCount));
    setShowLoadMore(products.length > visibleCardCount);
  }, [products, visibleCardCount]);

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(product => product.categories.includes(category));
      setProducts(filteredProducts);
    }
  };

  const handleLoadMore = () => {
    setVisibleCardCount(prevCount => prevCount + 9);
  };

  return (
    <div className='h-full  my-2'>
      
    <div className="container mx-auto py-2">
      <Section text="Nos produits" />
      <div className='py-4'>
      <CategoryFilter categories={[...categories]} selectedCategory={selectedCategory} onSelectCategory={filterProductsByCategory} />
      </div>
      <Divider/>
      <div className="flex flex-wrap items-center justify-center">
        {displayedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {showLoadMore && (
        <div className="flex justify-center my-4">
          <button onClick={handleLoadMore} className="btn bg-flowerpink text-black px-4 py-2 rounded-full uppercase text-sm font-light">Charger plus</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductPage;
