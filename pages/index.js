import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from 'react';
import { siteTitle } from "../components/Layout";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import { firebaseApp } from "../config/firebaseConfig";



const Home = () => {

  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPassConf, setSignupPassConf] = useState('');
  const [loginNotification, setLoginNotification] = useState('');
  const [signupNotification, setSignupNotification] = useState('');
  const [logoutNotification, setLogoutNotification] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(
        setLoginNotification(
          'You are logged in'
        ),
        setTimeout(() => {
          setLoginNotification('')
        }, 2000)
      )
      .catch((err) => {
        console.log(err.code, err.message)
        setLoginNotification(err.message)
        setTimeout(() => {
          setLoginNotification('')
        }, 2000)
      })
    setLoginEmail('')
    setLoginPassword('')
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupPassword !== signupPassConf) {
      setSignupNotification(
        'Password and password confirmation does not match'
      )
      setTimeout(() => {
        setSignupNotification('')
      }, 2000)
      setSignupPassword('');
      setSignupPassConf('');
      return null;
    }
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .catch((err) => {
        console.log(err.code, err.message)
      });
  }

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setLogoutNotification('You are logged out')
        setTimeout(() => {
          setLogoutNotification('')
        }, 2000),
          console.log('User is logged out')
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log('User is signed out');
    }
  });


  return (
    <>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div>
        <h1>Login</h1>
        {loginNotification}
        <form onSubmit={handleLogin}>
          Email: <input type="text" value={loginEmail}
            onChange={({ target }) => setLoginEmail(target.value)} />
          <br />
          Password: <input type="password" value={loginPassword}
            onChange={({ target }) => setLoginPassword(target.value)} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>

      <br />

      <div>
        <h1>Sign up</h1>
        {signupNotification}
        <form onSubmit={handleSignup}>
          Email: <input type="text" value={signupEmail}
            onChange={({ target }) => setSignupEmail(target.value)} />
          <br />
          Password: <input type="password" value={signupPassword}
            onChange={({ target }) => setSignupPassword(target.value)} />
          <br />
          Confirm password: <input type="password" value={signupPassConf}
            onChange={({ target }) => setSignupPassConf(target.value)} />
          <br />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <br />
      {logoutNotification}
      <div>
        <button type='button' onClick={handleLogout}>Logout</button>
      </div>

    </>
  );
};

export default Home;
