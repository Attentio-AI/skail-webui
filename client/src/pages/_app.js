import "../styles/globals.css";
import { auth } from '../firebase-config'; // Your Firebase auth import
import { useEffect, useState, useContext, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;


// // pages/_app.js
// import '../styles/App.css'; // Your CSS import
// import { useEffect, useState, useContext, createContext } from 'react';
// import { useRouter } from 'next/router';
// import { auth } from '../firebase-config'; // Your Firebase auth import
// import { onAuthStateChanged } from 'firebase/auth';
//
// // Create a context for the auth state
// const AuthContext = createContext();
//
// export function useAuth() {
//   return useContext(AuthContext);
// }
//
// function MyApp({ Component, pageProps }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();
//
//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     setIsAuthenticated(!!user);
//   //     if (user) {
//   //       if (router.pathname === '/login') {
//   //         router.replace('/home');
//   //       }
//   //     } else {
//   //       router.replace('/login');
//   //     }
//   //   });
//   //
//   //   return () => unsubscribe();
//   // }, [router]);
//
//   const authValue = {
//     isAuthenticated,
//   };
//
//   return (
//     <AuthContext.Provider value={authValue}>
//       <Component {...pageProps} />
//     </AuthContext.Provider>
//   );
// }
//
// export default MyApp;
