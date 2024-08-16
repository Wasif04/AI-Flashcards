// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcbXYIzJq8k_Vsm84JKa-0JPJQyEoy_XY",
  authDomain: "flashcardsaas-52aa1.firebaseapp.com",
  projectId: "flashcardsaas-52aa1",
  storageBucket: "flashcardsaas-52aa1.appspot.com",
  messagingSenderId: "953667926238",
  appId: "1:953667926238:web:7cbff02e8f98df160aaa4f",
  measurementId: "G-YSRR1H0HV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);