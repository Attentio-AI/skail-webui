// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config'; // Adjust the path as necessary
import { signOut } from 'firebase/auth';

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
