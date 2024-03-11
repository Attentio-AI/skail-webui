import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV6mUogEEwqWhXlJ_5fxpHrtZGEJJhGIU",
  authDomain: "skail-2956c.firebaseapp.com",
  projectId: "skail-2956c",
  storageBucket: "skail-2956c.appspot.com",
  messagingSenderId: "603698728327",
  appId: "1:603698728327:web:58667ca1ac76c3812e5722"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);