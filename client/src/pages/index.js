// Import React (not always necessary in newer versions of Next.js but good practice)
import React from 'react';
// Import the Link component for navigation
import Link from 'next/link';
import withAuth from "../components/withAuth";

// Functional component for the homepage
const HomePage = () => {
  return (
    <div>
      <h1>Skail</h1>
      <p>Welcome to Skail</p>

    </div>
  );
};

// Export the component as the default export
export default withAuth(HomePage);

