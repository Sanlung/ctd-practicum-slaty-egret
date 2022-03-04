import {getAuth, signOut} from "firebase/auth";
import {useRouter} from "next/router";
import {firebaseApp} from "../../config/firebaseConfig";

const LogoutButton = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        console.log(`The user '${user.uid}' has signed out.`);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };

  return (
    <>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
