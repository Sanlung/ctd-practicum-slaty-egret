import {useRouter} from "next/router";
import {getAuth, signOut} from "firebase/auth";
import {firebaseApp} from "../../config/firebaseConfig";
import {useAuth} from "../../context/AuthUserContext";

const LogoutButton = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const {authUser} = useAuth();

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        console.log(`The user '${authUser.uid}' has signed out.`);
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
