import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Loggedin.module.css";

const TodoListItem = ({item, isDisabled, onRemoveTodo}) => (
  <li className={styles.todoListItem}>
    <span>{item.todo}</span>{" "}
    <FontAwesomeIcon
      icon={faCheckCircle}
      type='button'
      className={styles.removeButton}
      disabled={isDisabled}
      onClick={() => onRemoveTodo(item)}></FontAwesomeIcon>
  </li>
);

export default TodoListItem;
