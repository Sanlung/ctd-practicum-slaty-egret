import Head from "next/head";
<<<<<<< HEAD
import { useRouter } from "next/router";
import { siteTitle } from "../components/Layout";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth"
import { firebaseApp } from "../config/firebaseConfig";
import {
  txtEmail,
  txtPassword,
  btnLogin,
  btnSignup
} from "../config/authUI";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import { async } from "@firebase/util";


const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

//Logging in:

const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch (error) {
    console.log(error);

  }
}

btnLogin.addEventListener("click", loginEmailPassword);


//Creating account:

const createAccount = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch (error) {
    console.log(error);

  }
}

btnSignup.addEventListener("click", createAccount);

=======
import {useRouter} from "next/router";
import {siteTitle} from "../components/Layout";
>>>>>>> main

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
<<<<<<< HEAD
      <LoginForm />
      <br></br>
      <SignUpForm />
=======
      <h2>Render login/signup form here</h2>
>>>>>>> main
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
