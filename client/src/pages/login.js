import React, {useEffect} from 'react';
import { FcGoogle } from "react-icons/fc";

import { auth } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);
  // Since signInWithRedirect does not immediately return user,
  // We don't use await here. Redirect result is handled elsewhere,
  // usually on the _app.js or a specific handling route.


  const GoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
          router.push('/dashboard'); // Adjust the target route as needed
      } catch (error) {
          console.error(error);
      }

      // console.log("GoogleLogin");
      // const auth = getAuth();
      // signInWithRedirect(auth, googleProvider)
      //   .then((result) => {
      //     // print
      //     console.log(result);
      //
      //     const user = result.user;
      //     console.log(user);
      //     router.push("/home");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
  };
  useEffect(() => {
        // print user
        console.log(user);
        if (user) {
          router.push("/dashboard");
        } else {
            console.log("not logged in");
        }
  }, [user]);
  return (
    <div className={"shadow-xl mt-32 p-10 text-gray-700"}>
      <h1>Login</h1>
      <button
        onClick={GoogleLogin}
        className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
        <FcGoogle className="text-2xl" />
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
