const EmailInputWithLabel = (props) => {

    const handleEmail = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={props.value}
                placeholder="Email"
                // onfocus="this.placeholder=''"
                // onblur="this.placeholder={props.labelTextContent}"
                onChange={handleEmail} />
            <label className="visuallyhidden">Email</label>
        </div >
    );
};

export default EmailInputWithLabel;