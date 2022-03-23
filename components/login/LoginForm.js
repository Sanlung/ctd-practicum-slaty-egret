import {useState} from "react";
import {useRouter} from "next/router";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faRotate,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {firebaseApp} from "../../config/firebaseConfig";
import EmailInputWithLabel from "./EmailInputWithLabel";
import PasswordInputWithLabel from "./PasswordInputWithLabel";
import SubmitButton from "./SubmitButton";
import styles from "../../styles/Home.module.css";

const LoginForm = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [loginNotification, setLoginNotification] = useState("");

  const handleSetEmail = (newValue) => {
    setLoginEmail(newValue);
  };

  const handleSetPassword = (newValue) => {
    setLoginPassword(newValue);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setPersistence(auth, browserSessionPersistence)
      .then(() => signInWithEmailAndPassword(auth, loginEmail, loginPassword))
      .then((userCredential) => {
        const user = userCredential.user;
        setIsError(false);
        setLoginEmail("");
        setLoginNotification("Logging in ...");
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setIsError(true);
        setLoginNotification(err.message);
        setTimeout(() => setLoginNotification(""), 3000);
      });
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
        <p className={loginNotification ? styles.notify : styles.hidden}>
          {!loginNotification ? (
            <span>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </span>
          ) : isError ? (
            <span>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </span>
          ) : (
            <span>
              <FontAwesomeIcon icon={faRotate} />
            </span>
          )}
          {loginNotification}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
