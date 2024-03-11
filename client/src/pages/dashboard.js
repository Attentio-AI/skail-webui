// pages/dashboard.js
import React from 'react';
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import withAuth from "../components/withAuth";

function Dashboard() {
  const [user, loading] = useAuthState(auth);

    if (loading || !user) {
        return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Welcome to your dashboard {user.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
      </div>
    );
  // Your Dashboard component content
}

export default withAuth(Dashboard);
