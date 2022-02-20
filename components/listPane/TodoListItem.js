const TodoListItem = ({item, isDisabled, onRemoveTodo}) => (
  <li>
    <span>{item.todo}</span>{" "}
    <button
      type='button'
      disabled={isDisabled}
      onClick={() => onRemoveTodo(item)}>
      ✔︎
    </button>
  </li>
);

export default TodoListItem;
