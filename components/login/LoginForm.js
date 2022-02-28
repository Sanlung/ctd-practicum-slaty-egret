import {useRouter} from "next/router";
import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {firebaseApp} from "../../config/firebaseConfig";
import EmailInputWithLabel from "./EmailInputWithLabel";
import PasswordInputWithLabel from "./PasswordInputWithLabel";
import SubmitButton from "./SubmitButton";
import styles from "../../styles/Home.module.css";

library.add(faLock, faEnvelope);

const LoginForm = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginNotification, setLoginNotification] = useState("");

  const handleSetEmail = (newValue) => {
    setLoginEmail(newValue);
  };

  const handleSetPassword = (newValue) => {
    setLoginPassword(newValue);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`The user '${user.uid}' has signed in.`);
        router.push({
          pathname: "/[user]",
          query: {
            user: user.uid,
            name: loginEmail.match(/^([^@]*)@/)[1],
          },
        });
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setLoginNotification(err.message);
      });
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <div className={`${styles.form} ${styles.loginForm}`}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <EmailInputWithLabel value={loginEmail} onSetEmail={handleSetEmail}>
          <FontAwesomeIcon icon={faEnvelope} />
        </EmailInputWithLabel>
        <PasswordInputWithLabel
          value={loginPassword}
          onSetPassword={handleSetPassword}>
          <FontAwesomeIcon icon={faLock} />
        </PasswordInputWithLabel>
        <SubmitButton>Login</SubmitButton>
        {loginNotification}
      </form>
    </div>
  );
};

export default LoginForm;
