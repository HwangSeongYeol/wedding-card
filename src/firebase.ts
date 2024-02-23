// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXq0kHh2eGgAnEgST10mVAfqpUEBJrrpU",
  authDomain: "wedding-card-comments.firebaseapp.com",
  projectId: "wedding-card-comments",
  storageBucket: "wedding-card-comments.appspot.com",
  messagingSenderId: "468583905814",
  appId: "1:468583905814:web:c514697cd6de60022c1337",
  measurementId: "G-7CEWF97HKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
