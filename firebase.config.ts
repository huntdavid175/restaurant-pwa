// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB028Dnnb-lfU0a3jKC7sO_0SRl6fAfq3Y",
  authDomain: "restaurant-order-b7fa4.firebaseapp.com",
  projectId: "restaurant-order-b7fa4",
  storageBucket: "restaurant-order-b7fa4.appspot.com",
  messagingSenderId: "784035929229",
  appId: "1:784035929229:web:7ca8484075e8a51e2096c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
