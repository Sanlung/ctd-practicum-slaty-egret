import styles from "../../styles/Home.module.css";

const PasswordInputWithLabel = ({
  isConfirm,
  value,
  onSetPassword,
  children,
}) => (
  <div>
    <label htmlFor='password' className={styles.icon}>
      {children}
    </label>
    <input
      className={styles.inputWithLabel}
      type='password'
      name='passowrd'
      value={value}
      placeholder={isConfirm ? "Confirm Passowrd" : "Password"}
      onChange={(e) => onSetPassword(e.target.value)}
    />
  </div>
);

export default PasswordInputWithLabel;
