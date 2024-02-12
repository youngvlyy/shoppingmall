// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgDOAUD-237nj98VA57sZkjLUMxo-S1Ew",
  authDomain: "shoppingmall-6772c.firebaseapp.com",
  projectId: "shoppingmall-6772c",
  storageBucket: "shoppingmall-6772c.appspot.com",
  messagingSenderId: "412950682277",
  appId: "1:412950682277:web:cdc5b1862d6be69c978b4c",
  measurementId: "G-CTF7BWWS7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app