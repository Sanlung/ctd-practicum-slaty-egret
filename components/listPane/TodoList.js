import TodoListItem from "./TodoListItem";

const TodoList = ({list, searchTerm, onRemoveTodo}) => (
  <>
    <ul>
      {list.map((item) => (
        <TodoListItem
          key={item.timeStamp}
          item={item}
          highlight={item.todo.toLowerCase().includes(searchTerm)}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  </>
);

export default TodoList;
