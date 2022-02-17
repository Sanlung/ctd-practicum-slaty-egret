import TodoListsNavItem from "./TodoListsNavItem";

const TodoListsNav = ({userId, lists, searchTerm, onRemoveList}) => (
  <>
    <ul>
      {lists.map((list) => (
        <TodoListsNavItem
          key={list.id}
          user={userId}
          listName={list.id}
          listCount={list.todos.length}
          highlight={list.id.toLowerCase().includes(searchTerm)}
          onRemoveList={onRemoveList}
        />
      ))}
    </ul>
  </>
);

export default TodoListsNav;
