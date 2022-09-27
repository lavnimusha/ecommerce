// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC340eMVmejuK3-kVBSNZ-6m4RrmWlVzaA",
  authDomain: "lave-ecommerce.firebaseapp.com",
  databaseURL: "https://lave-ecommerce-default-rtdb.firebaseio.com",
  projectId: "lave-ecommerce",
  storageBucket: "lave-ecommerce.appspot.com",
  messagingSenderId: "47409941532",
  appId: "1:47409941532:web:a3e0f6380ea93cb1dfa3d9",
  measurementId: "G-Q58L5KC2HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); 
const analytics = getAnalytics(app);