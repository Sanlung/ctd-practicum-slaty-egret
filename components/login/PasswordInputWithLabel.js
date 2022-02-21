const PasswordInputWithLabel = ({ value, onChange, labelTextContent }) => {
    return (
        <div>
            <input
                type="password"
                value={value}
                placeholder={labelTextContent}
                onChange={e => onChange(e.target.value)} />
            <label className="visuallyhidden">{labelTextContent}</label>
        </div>
    );
};

export default PasswordInputWithLabel;