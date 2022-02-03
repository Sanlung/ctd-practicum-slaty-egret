import TodoListItem from "./TodoListItem;";

const list = [{id: "1", title: "First item"}];

const TodoList = ({list}) => (
  <>
    <ul>
      {list.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  </>
);

export default TodoList;
