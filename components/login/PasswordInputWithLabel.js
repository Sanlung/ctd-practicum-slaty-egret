const PasswordInputWithLabel = () => (
    <div>
        <input type="password" id="txtPassword" value={password}
            onChange={({ target }) => setPassword(target.value)} />
        <label>Password</label>
    </div>
);

export default PasswordInputWithLabel;