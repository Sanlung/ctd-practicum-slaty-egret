import TodoListsNavItem from "./TodoListsNavItem";

const TodoListsNav = ({userId, lists, onRemoveList}) => (
  <>
    <ul>
      {lists.map((list) => (
        <TodoListsNavItem
          key={list.id}
          user={userId}
          listName={list.id}
          listCount={list.todos.length}
          onRemoveList={onRemoveList}
        />
      ))}
    </ul>
  </>
);

export default TodoListsNav;
