import {useRouter} from "next/router";
import {useState} from "react";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faEnvelopeOpen,
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
      setSignupNotification("Password and password confirmation do not match!");
      setSignupPassword("");
      setSignupPassConf("");
      return null;
    }
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`The user '${user.uid}' has signed up.`);
        router.push({
          pathname: "/[user]",
          query: {
            user: user.uid,
            name: signupEmail.match(/^([^@]*)@/)[1],
          },
        });
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setSignupNotification(err.message);
      });
    setSignupEmail("");
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
        {signupNotification}
      </form>
    </div>
  );
};
export default SignupForm;
