import {faDeleteLeft, faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/Loggedin.module.css";

library.add(faCircle, faDeleteLeft);

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
        <FontAwesomeIcon icon={faDeleteLeft} />
      </span>
    </li>
  );
};

export default TodoListsNavItem;
