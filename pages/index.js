import Head from "next/head";
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
<<<<<<< HEAD
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";
=======
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth"
import { firebaseApp } from "../config/firebaseConfig";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";


>>>>>>> 4468c71cefbad51b712877fdf58b455237f2b1b5

const Home = () => {

  const router = useRouter();
<<<<<<< HEAD
=======
  const auth = getAuth(firebaseApp);


  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid);
  //   } else {
  //     console.log('User is signed out');
  //   }
  // });
>>>>>>> 4468c71cefbad51b712877fdf58b455237f2b1b5


  return (
    <>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <LoginForm />
      </div>

      <div>
        <SignupForm />
      </div>

    </>
  );
};

export default Home;
