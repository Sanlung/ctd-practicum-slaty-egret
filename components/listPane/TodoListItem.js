import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Loggedin.module.css";

const TodoListItem = ({item, onRemoveTodo}) => (
  <li className={styles.todoListItem}>
    <span>{item.todo}</span>{" "}
    <FontAwesomeIcon
      className={styles.removeButton}
      icon={faCheckDouble}
      onClick={() => onRemoveTodo(item)}
    />
  </li>
);

export default TodoListItem;
