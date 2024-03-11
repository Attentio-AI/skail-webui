import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config'; // adjust the path as necessary

const withAuth = (Component) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // print
        console.log(user);
        if (user) {
          setUser(user);
        } else {
          router.push('/login');
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (!user) {
      return <div>Loading...</div>; // Or any loading component
    }
    return <Component {...props} />;
  };
};

export default withAuth;
