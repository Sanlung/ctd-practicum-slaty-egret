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
      <div className={styles.container}>
        <div className={styles.Login}>
          <LoginForm />
          </div>
        <div className={styles.SignupForm}>
      <SignupForm />
      </div>
      </div>
    </>
  );

  // <>
  //     <Head>
  //       <title>{siteTitle}</title>
  //     </Head>
  //     <div className={styles.container}>
  //     <h2>Render login/signup form here</h2>
  //     <button
  //       type='button'
  //       onClick={() =>
  //         router.push({
  //           pathname: "/[user]",
  //           query: {
  //             user: "user1AuthId",
  //           },
  //         })
  //       }>
  //       Login
  //     </button>
  //     </div>
  //   </>
  // );

};

export default Home;
