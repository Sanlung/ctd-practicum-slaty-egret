const TodoListItem = ({item}) => (
  <li>
    <span>{item.title}</span>
    <button type='button'>Remove</button>
  </li>
);

export default TodoListItem;
