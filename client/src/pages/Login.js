import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { auth } from '../firebase-config'; // Adjust the path as necessary

// Singleton pattern to manage Firebase UI instance
const getFirebaseUiInstance = (() => {
  let ui = null;
  return (auth) => {
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(auth);
    }
    return ui;
  };
})();

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const ui = getFirebaseUiInstance(auth);
    const uiConfig = {
      signInSuccessUrl: '/home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => {
          navigate('/home');
          return false; // Prevents redirect after sign-in
        },
      },
    };

    // Start Firebase UI
    ui.start('#firebaseui-auth-container', uiConfig);

    // No need to delete the UI instance on cleanup, as we're using a singleton pattern
    // Just reset the UI state to ensure it's clean for next render
    return () => {
      ui.reset();
    };
  }, [navigate]);

  return (
    <div>
      <h1>Login</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}

export default Login;
