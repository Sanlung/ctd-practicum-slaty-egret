// import {
//   getAuth,
//   signOut
// } from "firebase/auth"
// import { firebaseApp } from "../../config/firebaseConfig";

// const LogoutButton = () => {

//   const auth = getAuth(firebaseApp);

//   const handleLogout = (e) => {
//     signOut(auth);
//   };

//   return (
//     <>
//       <button type='button' onClick={handleLogout}>Logout</button>
//     </>
//   );
// };

// export default LogoutButton;
import { useRouter } from "next/router";
import {
  getAuth,
  signOut
} from "firebase/auth";
import { firebaseApp } from "../../config/firebaseConfig";

const LogoutButton = () => {
  const router=useRouter();
  const auth = getAuth(firebaseApp);

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        router.push('/')
      })
  }

  return (
    <>
      <button type='button' onClick={handleLogout}>Logout</button>
    </>
  );
};
export default LogoutButton;