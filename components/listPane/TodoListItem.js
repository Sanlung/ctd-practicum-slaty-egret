const TodoListItem = ({item, onRemoveTodo}) => (
  <li>
    <span>{item.todo}</span>{" "}
    <button type='button' onClick={() => onRemoveTodo(item)}>
      ✔︎
    </button>
  </li>
);

export default TodoListItem;
