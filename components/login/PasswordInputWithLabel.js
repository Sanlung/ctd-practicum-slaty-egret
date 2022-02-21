const PasswordInputWithLabel = ({
  isConfirm,
  value,
  onSetPassword,
  children,
}) => {
  return (
    <div>
      <label htmlFor='password'>{children}</label>
      <input
        type='password'
        name='passowrd'
        value={value}
        placeholder={isConfirm ? "Confirm Passowrd" : "Password"}
        onChange={(e) => onSetPassword(e.target.value)}
      />
    </div>
  );
};

export default PasswordInputWithLabel;
