import Link from "next/link";
<<<<<<< HEAD
import {
  getAuth,
  signOut
=======
import { useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged
>>>>>>> 4468c71cefbad51b712877fdf58b455237f2b1b5
} from "firebase/auth"
import { firebaseApp } from "../../config/firebaseConfig";


const LogoutButton = () => {

  const auth = getAuth(firebaseApp);
<<<<<<< HEAD

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth);
  };

=======
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

>>>>>>> 4468c71cefbad51b712877fdf58b455237f2b1b5
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