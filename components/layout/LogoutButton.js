import Link from "next/link";
import { useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { firebaseApp } from "../../config/firebaseConfig";


const LogoutButton = () => {

  const auth = getAuth(firebaseApp);
  const [logoutNotification, setLogoutNotification] = useState('');

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('User is logged out')
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log('User is signed out');
    }
  });

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