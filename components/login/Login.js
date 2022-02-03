const Login = () => (
    <>
        <div id="login">
            <div>
                <h2>Please login or sign up</h2>
            </div>
            <form>
                <div class="group">
                    <input id="txtEmail" type="email"></input>
                    <label>Email</label>
                </div>
                <div class="group">
                    <input id="txtPassword" type="password"></input>
                    <label>Password</label>
                </div>
                <div id="divLoginError" class="group">
                    <div id="lblLoginErrorMessage" class="errorlabel">Error message</div>
                </div>
                <div>
                    <button type="button">Log in</button>
                </div>
            </form>
            <br></br>
            <form>
                <div class="group">
                    <input id="txtEmail" type="email"></input>
                    <label>Email</label>
                </div>
                <div class="group">
                    <input id="txtPassword" type="password"></input>
                    <label>Password</label>
                </div>
                <div class="group">
                    <input id="txtPassword" type="password"></input>
                    <label>Confirm password</label>
                </div>
                <div id="divSignUpError" class="group">
                    <div id="lblSignUpErrorMessage" class="errorlabel">Error message</div>
                </div>
                <div>
                    <button type="button">Sign Up</button>
                </div>
            </form>
        </div>
    </>
);

export default Login;