const TodoListsNavItem = ({
  listName,
  listCount,
  onDisplayList,
  onRemoveList,
}) => {
  return (
    <li>
      <button type='button' onClick={() => onDisplayList(listName)}>
        {listName}
      </button>{" "}
      <button type='button' onClick={() => onRemoveList(listName)}>
        {listCount}
      </button>
    </li>
  );
};

export default TodoListsNavItem;
