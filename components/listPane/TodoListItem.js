const TodoListItem = ({item}) => (
  <li>
    <span>{item.todo}</span>
    <button type='button'>Remove</button>
  </li>
);

export default TodoListItem;
