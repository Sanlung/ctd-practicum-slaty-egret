import { faDeleteLeft, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../styles/Logedin.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

library.add(
  faCircle,
  faDeleteLeft,
)


const TodoListsNavItem = ({
  listName,
  listCount,
  onDisplayList,
  onRemoveList,
}) => {
  return (
    <li className={style.menuitem}>
     <span className={style.iconSpan}> <FontAwesomeIcon icon={faCircle}/></span>
    <button className={style.btn} type='button' onClick={() => onDisplayList(listName)}>
        {listName}
      </button>{" "}
      <button className={style.iconDelete} type='button' onClick={() => onRemoveList(listName)}>
        {listCount}
        <FontAwesomeIcon icon={faDeleteLeft}/>
      </button>
    </li>
  );
};

export default TodoListsNavItem;
