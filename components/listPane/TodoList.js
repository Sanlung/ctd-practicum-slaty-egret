import TodoListItem from "./TodoListItem";

const TodoList = ({list}) => (
  <>
    <ul>
      {list.map(item => (
        <TodoListItem key={item.timeStamp} item={item} />
      ))}
    </ul>
  </>
);

export default TodoList;
