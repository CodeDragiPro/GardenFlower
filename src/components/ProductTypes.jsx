import React from 'react';
import { Link } from 'react-router-dom'; 
import Section from './Section';
import ProductTypesDisplay from './ProductTypesDisplay';
import Button from './Button';

const ProductTypes = () => {
  return (
    <div className="flex flex-col items-center" id='products'> 
      <Section text="Nos produits"/>
      <ProductTypesDisplay/>
      <div className="my-4">
        <Link to="/product">
          <Button text="VOIR NOS PRODUITS" className="" />
        </Link>
      </div>
    </div>
  );
}

export default ProductTypes;
