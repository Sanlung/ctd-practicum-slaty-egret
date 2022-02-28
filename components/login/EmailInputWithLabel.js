import styles from "../../styles/Home.module.css";

const EmailInputWithLabel = ({value, onSetEmail, children}) => (
  <div className={styles.inputWithLabel}>
    <label htmlFor='email' className={styles.icon}>
      {children}
    </label>
    <input
      type='email'
      name='email'
      value={value}
      placeholder='Email'
      onChange={(e) => onSetEmail(e.target.value)}
    />
  </div>
);

export default EmailInputWithLabel;
