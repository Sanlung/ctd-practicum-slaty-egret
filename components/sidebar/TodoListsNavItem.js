import Link from "next/link";

const TodoListsNavItem = ({user, listName}) => {
  return (
    <li>
      <Link href={`/${user}/${listName}`}>
        <a>
          <span>{listName}</span>
        </a>
      </Link>
      <button type='button'>Remove</button>
    </li>
  );
};

export default TodoListsNavItem;
