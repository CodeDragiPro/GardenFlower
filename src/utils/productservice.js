import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../firebaseConfig';


// Fonction pour récupérer les produits depuis Firestore
export const fetchProducts = async () => {
  // Obtenez une instance de Firestore
  const dbInstance = getFirestore(app);
  // Obtenez la collection de produits
  const productsCollection = collection(dbInstance, 'products');
  // Obtenez tous les documents de la collection
  const data = await getDocs(productsCollection);
  // Transformez les données en un tableau d'objets avec les identifiants des documents
  const products = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

// Fonction pour récupérer les catégories à partir des produits
export const fetchCategories = async () => {
  // Obtenez une instance de Firestore
  const dbInstance = getFirestore(app);
  // Obtenez la collection de produits
  const productsCollection = collection(dbInstance, 'products');
  // Obtenez tous les documents de la collection
  const data = await getDocs(productsCollection);
  // Initialisez un ensemble pour stocker les catégories uniques
  const categoriesSet = new Set();
  // Parcourez tous les documents pour extraire les catégories
  data.docs.forEach(doc => {
    const product = doc.data();
    product.categories.forEach(category => categoriesSet.add(category));
  });
  // Transformez l'ensemble en un tableau
  const categories = Array.from(categoriesSet);
  return categories;
};