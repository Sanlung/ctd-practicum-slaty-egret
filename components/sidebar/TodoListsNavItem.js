import Link from "next/link";

const TodoListsNavItem = ({
  user,
  listName,
  listCount,
  highlight,
  onRemoveList,
}) => {
  return (
    <li>
      <Link href={`/${user}/${listName}`}>
        <a>
          {highlight ? (
            <span className='highlight'>{listName}</span>
          ) : (
            <span>{listName}</span>
          )}
        </a>
      </Link>{" "}
      <button type='button' onClick={() => onRemoveList(listName)}>
        {listCount}
      </button>
    </li>
  );
};

export default TodoListsNavItem;
