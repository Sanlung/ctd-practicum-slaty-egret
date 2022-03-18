import {useState, useEffect, createContext, useContext} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {firebaseApp} from "../config/firebaseConfig";
import {useRouter} from "next/router";

const useAuthUser = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return {authUser};
};

const authUserContext = createContext({authUser: null});

const AuthUserProvider = ({children}) => {
  const authUser = useAuthUser();
  return (
    <authUserContext.Provider value={authUser}>
      {children}
    </authUserContext.Provider>
  );
};

export const useAuth = () => useContext(authUserContext);

export default AuthUserProvider;
