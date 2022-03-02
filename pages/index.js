import Head from "next/head";
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
import { firebaseApp } from "../config/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";
import styles from "../styles/Home.module.css";

const Home = () => {

  const router = useRouter();
  const auth = getAuth(firebaseApp);


  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <LoginForm />
      <SignUpForm />
    </>
  );

};

export default Home;
