import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../../firebaseConfig';


const fetchProducts = async () => {
  const dbInstance = getFirestore(app);
  const productsCollection = collection(dbInstance, 'products');
  const data = await getDocs(productsCollection);
  return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export { fetchProducts };
