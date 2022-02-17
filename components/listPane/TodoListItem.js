const TodoListItem = ({item, highlight, onRemoveTodo}) => (
  <li>
    {highlight ? (
      <span className='highlight'>{item.todo}</span>
    ) : (
      <span>{item.todo}</span>
    )}{" "}
    <button type='button' onClick={() => onRemoveTodo(item)}>
      ✔︎
    </button>
  </li>
);

export default TodoListItem;
