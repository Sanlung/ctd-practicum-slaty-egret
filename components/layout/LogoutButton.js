import Link from "next/link";
import {
  getAuth,
  signOut
} from "firebase/auth"
import { firebaseApp } from "../../config/firebaseConfig";


const LogoutButton = () => {

  const auth = getAuth(firebaseApp);

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth);
  };

  return (
    <>
      <Link href='/'>
        <a>
          <button type='button' onClick={handleLogout}>Logout</button>
        </a>
      </Link>
    </>
  );
};

export default LogoutButton;