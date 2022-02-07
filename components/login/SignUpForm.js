import NameInputWithLabel from './NameInputWithLabel';
import EmailInputWithLabel from './EmailInputWithLabel';
import PasswordInputWithLabel from './PasswordInputWithLabel';
import SubmitButton from './SubmitButton';

const SignUpForm = () => {

    return (
        <div>
            <h1>Create new user</h1>
            <form>
                <NameInputWithLabel />
                <br />
                <EmailInputWithLabel />
                <br />
                <PasswordInputWithLabel />
                <br />
                <PasswordInputWithLabel />
                <br />
                <SubmitButton />
            </form>
        </div>
    );
};
export default SignUpForm;