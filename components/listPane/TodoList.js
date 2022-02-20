import TodoListItem from "./TodoListItem";

const TodoList = ({list, isDisabled, onRemoveTodo}) => (
  <>
    <ul>
      {list.map((item) => (
        <TodoListItem
          key={String(item.timeStamp)}
          item={item}
          isDisabled={isDisabled}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  </>
);

export default TodoList;
