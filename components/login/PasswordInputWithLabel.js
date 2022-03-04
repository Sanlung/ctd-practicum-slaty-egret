import styles from "../../styles/Home.module.css";

const PasswordInputWithLabel = ({
  isConfirm,
  value,
  onSetPassword,
  children,
}) => (
  <div className={styles.inputWithLabel}>
    <label
      htmlFor={isConfirm ? "passwordConfirm" : "password"}
      className={styles.icon}>
      {children}
    </label>
    <input
      type='password'
      name={isConfirm ? "passwordConfirm" : "password"}
      value={value}
      placeholder={isConfirm ? "Confirm Password" : "Password"}
      onChange={(e) => onSetPassword(e.target.value)}
    />
  </div>
);

export default PasswordInputWithLabel;
