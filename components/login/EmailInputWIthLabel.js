const EmailInputWithLabel = () => (
    <div>
        <input type="text" id="txtEmail" value={userEmail}
            onChange={({ target }) => setUseremail(target.value)} />
        <label>Email</label>
    </div>
);

export default EmailInputWithLabel;