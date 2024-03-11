import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center py-10">
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href="/login">
          </Link>
        )}
        {user && (
          <div>
            <Link href="/">
              <img
                referrerPolicy="no-referrer"
                className="w-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}