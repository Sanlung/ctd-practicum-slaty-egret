import styles from "../../styles/Home.module.css";

const EmailInputWithLabel = ({value, onSetEmail, children}) => (
  <div>
    <label htmlFor='email' className={styles.icon}>
      {children}
    </label>
    <inputt
      className={styles.inputWithLabel}
      type='email'
      name='email'
      value={value}
      placeholder='Email'
      onChange={(e) => onSetEmail(e.target.value)}
    />
  </div>
);

export default EmailInputWithLabel;
