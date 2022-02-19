const EmailInputWithLabel = ({ value, onChange }) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                placeholder="Email"
                onChange={e => onChange(e.target.value)} />
            <label className="visuallyhidden">Email</label>
        </div>
    );
};

export default EmailInputWithLabel;