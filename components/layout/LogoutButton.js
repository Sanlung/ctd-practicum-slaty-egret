import {
  getAuth,
  signOut
} from "firebase/auth"
import { firebaseApp } from "../../config/firebaseConfig";

const LogoutButton = () => {

  const auth = getAuth(firebaseApp);

  const handleLogout = (e) => {
    signOut(auth);
  };

  return (
    <>
      <button type='button' onClick={handleLogout}>Logout</button>
    </>
  );
};

export default LogoutButton;