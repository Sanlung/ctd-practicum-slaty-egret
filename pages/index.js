import Head from "next/head";
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth"
import { firebaseApp } from "../config/firebaseConfig";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";



const Home = () => {

  const router = useRouter();
  const auth = getAuth(firebaseApp);


  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid);
  //   } else {
  //     console.log('User is signed out');
  //   }
  // });


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
