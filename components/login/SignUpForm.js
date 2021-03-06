import {useState} from "react";
import {useRouter} from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

const SignupForm = () => {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPassConf, setSignupPassConf] = useState("");
  const [isError, setIsError] = useState(false);
  const [signupNotification, setSignupNotification] = useState("");

  const handleSetEmail = (newValue) => {
    setSignupEmail(newValue);
  };

  const handleSetPassword = (newValue) => {
    setSignupPassword(newValue);
  };

  const handleSetPassConf = (newValue) => {
    setSignupPassConf(newValue);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signupPassword !== signupPassConf) {
      setIsError(true);
      setSignupNotification("Passwords do not match!");
      setTimeout(() => setSignupNotification(""), 3000);
      setSignupPassword("");
      setSignupPassConf("");
      return null;
    }
    setPersistence(auth, browserSessionPersistence)
      .then(() =>
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      )
      .then((userCredential) => {
        const user = userCredential.user;
        setIsError(false);
        setSignupEmail("");
        setSignupNotification("Signing in new user ...");
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setIsError(true);
        setSignupNotification(err.message);
        setTimeout(() => setSignupNotification(""), 3000);
      });
    setSignupPassword("");
    setSignupPassConf("");
  };

  return (
    <div className={`${styles.form} ${styles.signUpForm}`}>
      <form onSubmit={handleSignUp}>
        <h2>Sign up</h2>
        <EmailInputWithLabel value={signupEmail} onSetEmail={handleSetEmail}>
          <FontAwesomeIcon icon={faEnvelope} />
        </EmailInputWithLabel>
        <PasswordInputWithLabel
          isConfirm={false}
          value={signupPassword}
          onSetPassword={handleSetPassword}>
          <FontAwesomeIcon icon={faLock} />
        </PasswordInputWithLabel>
        <PasswordInputWithLabel
          isConfirm
          value={signupPassConf}
          onSetPassword={handleSetPassConf}>
          <FontAwesomeIcon icon={faLock} />
        </PasswordInputWithLabel>
        <SubmitButton>Sign Up</SubmitButton>
        <p className={signupNotification ? styles.notify : styles.hidden}>
          {!signupNotification ? (
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
          {signupNotification}
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
