import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {

  apiKey: "AIzaSyAX-5UVCHG-9dIIyN9xj-aQ-ZE6y58Mg7A",

  authDomain: "moreno-sandbox-543fc.firebaseapp.com",

  projectId: "moreno-sandbox-543fc",

  storageBucket: "moreno-sandbox-543fc.firebasestorage.app",

  messagingSenderId: "433650544309",

  appId: "1:433650544309:web:8332999e3c94a8e87e58fc"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
