import TodoListItem from "./TodoListItem";

const TodoList = ({list, onRemoveTodo}) => (
  <>
    <ul>
      {list.map((item) => (
        <TodoListItem
          key={item.timeStamp}
          item={item}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  </>
);

export default TodoList;
