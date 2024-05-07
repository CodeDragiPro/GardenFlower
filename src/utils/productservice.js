import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../firebaseConfig';


// Fonction pour récupérer les produits depuis Firestore
export const fetchProducts = async () => {
  const dbInstance = getFirestore(app);
  const productsCollection = collection(dbInstance, 'products');
  const data = await getDocs(productsCollection);
  const products = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

// Fonction pour récupérer les catégories à partir des produits
export const fetchCategories = async () => {
  const dbInstance = getFirestore(app);
  const productsCollection = collection(dbInstance, 'products');
  const data = await getDocs(productsCollection);
  const categoriesSet = new Set();
  data.docs.forEach(doc => {
    const product = doc.data();
    product.categories.forEach(category => categoriesSet.add(category));
  });

  const categories = Array.from(categoriesSet);
  return categories;
};