import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { firebaseApp } from '../../config/firebaseConfig';
import EmailInputWithLabel from './EmailInputWithLabel';
import PasswordInputWithLabel from './PasswordInputWithLabel';
import SubmitButton from './SubmitButton';

const SignupForm = () => {

    const router = useRouter();
    const auth = getAuth(firebaseApp);

    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPassConf, setSignupPassConf] = useState('');
    const [signupNotification, setSignupNotification] = useState('');

    const handleEmail = (newValue) => {
        setSignupEmail(newValue);
    };

    const handlePassword = (newValue) => {
        setSignupPassword(newValue);
    };

    const handlePassConf = (newValue) => {
        setSignupPassConf(newValue);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (signupPassword !== signupPassConf) {
            setSignupNotification(
                'Password and password confirmation do not match'
            )
            setSignupPassword('');
            setSignupPassConf('');
            return null;
        }
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredential) => {
                console.log(userCredential.user.uid)
                router.push(`/[${userCredential.user.uid}]`)
            })
            .catch((err) => {
                console.log(err.code, err.message)
                setSignupNotification(err.message)
            });
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
                <EmailInputWithLabel
                    value={signupEmail}
                    onChange={handleEmail}
                />
                <br />
                <PasswordInputWithLabel
                    value={signupPassword}
                    onChange={handlePassword}
                    labelTextContent='Password'
                />
                <br />
                <PasswordInputWithLabel
                    value={signupPassConf}
                    onChange={handlePassConf}
                    labelTextContent='Confirm password'
                />
                <br />
                <SubmitButton buttonTextContent='Sign up' />
                <br />
                {signupNotification}
            </form>
        </div>
    );
};
export default SignupForm;