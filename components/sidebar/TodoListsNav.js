import TodoListsNavItem from "./TodoListsNavItem";

const lists = [{id: "1", title: "First List"}];

const TodoListsNav = () => (
  <>
    <ul>
      {lists.map((list) => (
        <TodoListsNavItem key={list.id} list={list} />
      ))}
    </ul>
  </>
);

export default TodoListsNav;
