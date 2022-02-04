import NameInputWithLabel from './NameInputWithLabel';
import EmailInputWithLabel from './EmailInputWithLabel';
import PasswordInputWithLabel from './PasswordInputWithLabel';
import SubmitButton from './SubmitButton';

const SignUpForm = () => (
    <>
        <NameInputWithLabel />
        <EmailInputWithLabel />
        <PasswordInputWithLabel />
        <PasswordInputWithLabel />
        <SubmitButton />
    </>
);

export default SignUpForm;