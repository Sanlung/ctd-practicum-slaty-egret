import Link from "next/link";

const TodoListsNavItem = ({user, listName, listCount, onRemoveList}) => {
  return (
    <li>
      <Link href={`/${user}/${listName}`}>
        <a>
          <span>{listName}</span>
        </a>
      </Link>{" "}
      <button type='button' onClick={() => onRemoveList(listName)}>
        {listCount}
      </button>
    </li>
  );
};

export default TodoListsNavItem;
