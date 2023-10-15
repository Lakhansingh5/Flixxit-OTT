import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCssiW2_ONE6x2KMiXX8QgpavuRF2ws6a0",
  authDomain: "flixxit3.firebaseapp.com",
  projectId: "flixxit3",
  storageBucket: "flixxit3.appspot.com",
  messagingSenderId: "405099511195",
  appId: "1:405099511195:web:42a7d5fe6448727837353e",
  measurementId: "G-KZZ4EEW17R"
}; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  
  export default db;
