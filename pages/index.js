import Head from "next/head";
import {useRouter} from "next/router";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {siteTitle} from "../components/Layout";
import {firebaseApp} from "../config/firebaseConfig";

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
      <h2>Render login/signup form here</h2>
      <button
        type='button'
        onClick={() =>
          router.push({
            pathname: "/[user]",
            query: {
              user: "user1AuthId",
            },
          })
        }>
        Login
      </button>
    </>
  );
};

export default Home;
