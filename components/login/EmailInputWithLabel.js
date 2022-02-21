const EmailInputWithLabel = ({value, onSetEmail, children}) => {
  return (
    <div>
      <label htmlFor='email'>{children}</label>
      <input
        type='email'
        name='email'
        value={value}
        placeholder='Email'
        onChange={(e) => onSetEmail(e.target.value)}
      />
    </div>
  );
};

export default EmailInputWithLabel;
