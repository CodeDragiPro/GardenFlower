import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ProductDetails = () => {
  const { id } = useParams(); // Récupérer l'ID du produit depuis les paramètres d'URL
  const [product, setProduct] = useState(null); // État pour stocker les détails du produit

  useEffect(() => {
    // Fonction asynchrone pour obtenir les détails du produit depuis Firestore
    const getProductDetails = async () => {
      const db = getFirestore(); // Obtenez une instance de Firestore
      const productRef = doc(db, 'products', id); // Référence du document du produit avec l'ID
      const productSnapshot = await getDoc(productRef); // Obtenez le snapshot du document

      if (productSnapshot.exists()) {
        // Vérifiez si le produit existe dans la base de données
        setProduct(productSnapshot.data()); // Mettez à jour l'état avec les détails du produit
      } else {
        console.log('Product not found'); // Affichez un message si le produit n'est pas trouvé
      }
    };

    getProductDetails(); // Appelez la fonction pour obtenir les détails du produit
  }, [id]); // Exécutez l'effet à chaque fois que l'ID du produit change

  return (
    <div>
      {product ? (
        <p>{product.title}</p> // Affichez le nom du produit dans un paragraphe
      ) : (
        <p>Loading...</p> // Affichez un message de chargement si les détails du produit sont en cours de chargement
      )}
    </div>
  );
};

export default ProductDetails;
