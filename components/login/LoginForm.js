import {useRouter} from "next/router";
import {useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {firebaseApp} from "../../config/firebaseConfig";
import EmailInputWithLabel from "./EmailInputWithLabel";
import PasswordInputWithLabel from "./PasswordInputWithLabel";
import SubmitButton from "./SubmitButton";

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
    <>
      <form onSubmit={handleLogin}>
        <h2>Log in</h2>
        <EmailInputWithLabel value={loginEmail} onSetEmail={handleSetEmail}>
          &#128231;
        </EmailInputWithLabel>
        <PasswordInputWithLabel
          value={loginPassword}
          onSetPassword={handleSetPassword}>
          &#128273;
        </PasswordInputWithLabel>
        <SubmitButton>Log In</SubmitButton> {loginNotification}
      </form>
    </>
  );
};

export default LoginForm;
