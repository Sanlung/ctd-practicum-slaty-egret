import Head from "next/head";
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
import { firebaseApp } from "../config/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";


const Home = () => {

  const router = useRouter();
  const auth = getAuth(firebaseApp);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     router.push('/{user}');
  //   } else {
  //     router.push('/');
  //   }
  // });

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LoginForm />
      <SignupForm />
    </>
  );
};

export default Home;
