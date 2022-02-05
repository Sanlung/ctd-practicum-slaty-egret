import TodoListsNavItem from "./TodoListsNavItem";

const TodoListsNav = ({user, lists}) => (
  <>
    <ul>
      {lists.map(list => (
        <TodoListsNavItem key={list.id} user={user} listName={list.id} />
      ))}
    </ul>
  </>
);

export default TodoListsNav;
