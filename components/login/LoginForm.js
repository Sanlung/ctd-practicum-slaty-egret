import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    getAuth,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseApp } from '../../config/firebaseConfig';
import EmailInputWithLabel from './EmailInputWithLabel';
import PasswordInputWithLabel from './PasswordInputWithLabel';
import SubmitButton from './SubmitButton';
import style from "../../styles/Home.module.css";

import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();
    const auth = getAuth(firebaseApp);

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginNotification, setLoginNotification] = useState('');

    const handleEmail = (newValue) => {
        setLoginEmail(newValue);
    };

    const handlePassword = (newValue) => {
        setLoginPassword(newValue);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((userCredential) => {
                router.push(`/[${userCredential.user.uid}]`)
                console.log(userCredential.user.uid)
            })
            .catch((err) => {
                console.log(err.code, err.message)
                setLoginNotification(err.message)
            })
        setLoginEmail('')
        setLoginPassword('')
    }

    return (
        <>
            <div>
                <h1>Log in</h1>
                <form className={style.login} onSubmit={handleLogin}>
                    <EmailInputWithLabel
                        value={loginEmail}
                        onChange={handleEmail}
                    />
                    <br />
                    <PasswordInputWithLabel
                        value={loginPassword}
                        onChange={handlePassword}
                        labelTextContent='Password'
                    />
                    <br />
                    <SubmitButton buttonTextContent='Log in' />
                    <br />
                    {loginNotification}
                </form>
            </div>
        </>
    );
};

export default LoginForm;