const PasswordInputWithLabel = (props) => {

    const handlePassword = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div>
            <input
                type="password"
                value={props.value}
                placeholder={props.labelTextContent}
                // onfocus="this.placeholder=''"
                // onblur="this.placeholder={props.labelTextContent}"
                onChange={handlePassword} />
            <label className="visuallyhidden">{props.labelTextContent}</label>
        </div>
    );
};

export default PasswordInputWithLabel;