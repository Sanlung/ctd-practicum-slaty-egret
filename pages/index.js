import Head from "next/head";
import {useRouter} from "next/router";
import {siteTitle} from "../components/Layout";
import {firebaseApp} from "../config/firebaseConfig";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";

const Home = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const userId = user.uid;
  //     router.push({
  //       pathname: "/[user]",
  //       query: {
  //         user: userId,
  //       },
  //     });
  //     console.log("User is signed in.");
  //   } else {
  //     router.push("/");
  //     console.log("User is signed out.");
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
