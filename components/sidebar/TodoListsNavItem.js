import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEraser} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/Loggedin.module.css";

const TodoListsNavItem = ({
  listName,
  listCount,
  onDisplayList,
  onRemoveList,
}) => {
  return (
    <li className={styles.menuitem}>
      <FontAwesomeIcon icon={faCircle} />
      <span
        className={styles.spanClickable}
        onClick={() => onDisplayList(listName)}>
        {listName}
      </span>{" "}
      <span className={styles.listCount}>{listCount}</span>
      <span
        className={`${styles.iconDelete} ${styles.spanClickable}`}
        onClick={() => onRemoveList(listName)}>
        <FontAwesomeIcon icon={faEraser} />
      </span>
    </li>
  );
};

export default TodoListsNavItem;
