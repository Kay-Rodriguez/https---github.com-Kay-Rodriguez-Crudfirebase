import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Configuración de Firebase (reemplaza con tus valores específicos)
const firebaseConfig = {
  apiKey: "AIzaSyBedBqRsf57T83vxnaqyqK0NxxY38taHOI",  // Reemplaza con tu clave de API
  authDomain: "maquetas-1ec63.firebaseapp.com",  // Usualmente es: <nombre-del-proyecto>.firebaseapp.com
  projectId: "maquetas-1ec63",  // Tu ID de proyecto
  storageBucket: "maquetas-1ec63.appspot.com",  // Usualmente es: <nombre-del-proyecto>.appspot.com
  messagingSenderId: "1096960820188",  // ID del proyecto
  appId: "1:1096960820188v:web:someappId",  // Reemplaza con tu appId (puedes encontrarlo en la consola de Firebase)
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar las funciones de Firestore
export { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc };
