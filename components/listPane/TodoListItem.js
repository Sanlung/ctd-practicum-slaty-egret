import style from "../../styles/Logedin.module.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const TodoListItem = ({item, isDisabled, onRemoveTodo}) => (
  <li className={style.todoListItem}>
    <span>{item.todo}</span>{" "}
    <FontAwesomeIcon icon={faCheckCircle}
      type='button'
      disabled={isDisabled}
      onClick={() => onRemoveTodo(item)}></FontAwesomeIcon>
      {/* ✔︎
    </button> */}
  </li>
);

export default TodoListItem;
