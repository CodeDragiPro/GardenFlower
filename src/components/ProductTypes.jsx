import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom
import Section from './Section';
import ProductTypesDisplay from './ProductTypesDisplay';
import Button from './Button';

const ProductTypes = () => {
  return (
    <div className="flex flex-col items-center"> {/* Centrer les éléments dans la colonne */}
      <Section text="NOS PRODUITS"/>
      <ProductTypesDisplay/>
      <div className="my-4">
        {/* Utiliser Link pour rediriger vers ProductList au clic sur le bouton */}
        <Link to="/productpage">
          <Button text="VOIR NOS PRODUITS" className="" />
        </Link>
      </div>
    </div>
  );
}

export default ProductTypes;
