const NameInputWithLabel = () => (
    <div>
        <input type="text" value={userName}
            onChange={({ target }) => setUsername(target.value)} />
        <label>Name</label>
    </div>
);

export default NameInputWithLabel;